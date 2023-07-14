// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Vesting {
    uint256 public totalSupply;

    struct Organisation {
        address orgAddress;
        string name;
        uint256 token;
    }

    struct Stakeholder {
        string stakeholderPost;
        uint256 vestingPeriod;
        uint256 startTime;
        uint256 token;
        uint256 claimedToken;
    }

    mapping(address => Stakeholder) public stakeholders;
    mapping(address => bool) public whitelistedAddresses;
    mapping(address => Organisation) public organisations;
    mapping(address => uint256) public balance;

    event CreateStakeholder(uint256 startTime, uint256 vestingPeriod);

    modifier onlyOrganisationAdmin() {
        require(
            organisations[msg.sender].orgAddress == msg.sender,
            "Unauthorized: Only the organization admin can perform this action"
        );

        _;
    }

    modifier onlyWhitelisted() {
        require(
            whitelistedAddresses[msg.sender],
            "Only whitelisted address can withdraw"
        );
        _;
    }

    function addOrganisation(
        string memory _name,
        address _orgAddress,
        uint256 _token
    ) public {
        Organisation storage org = organisations[_orgAddress];
        org.orgAddress = _orgAddress;
        org.name = _name;
        org.token = _token;
        totalSupply += _token;
    }

    function addStakeholder(
        address _stakeholderAddress,
        string memory _post,
        uint256 _vestingPeriod,
        uint256 _token
    ) public onlyOrganisationAdmin {
        Organisation storage org = organisations[msg.sender];
        require(
            org.token >= _token,
            "Token cannot be greater than the total token"
        );

        Stakeholder storage stakeholder = stakeholders[_stakeholderAddress];
        stakeholder.stakeholderPost = _post;
        stakeholder.vestingPeriod = _vestingPeriod;
        stakeholder.startTime = block.timestamp;
        stakeholder.token = _token;
        stakeholder.claimedToken = 0;

        emit CreateStakeholder(block.timestamp, _vestingPeriod);
    }

    function whitelistAddress(
        address _stakeholder
    ) external onlyOrganisationAdmin {
        whitelistedAddresses[_stakeholder] = true;
    }

    function claimToken() external onlyWhitelisted {
        Stakeholder storage stakeholder = stakeholders[msg.sender];
        require(
            stakeholder.startTime != 0,
            "You do not belong to any organization"
        );
        require(
            block.timestamp >=
                stakeholder.startTime + stakeholder.vestingPeriod,
            "Vesting period not yet over"
        );

        uint256 claimableTokens = stakeholder.token - stakeholder.claimedToken;
        require(claimableTokens > 0, "No tokens available to claim");

        stakeholder.claimedToken += claimableTokens;
        balance[msg.sender] += claimableTokens;
    }

    function getClaimedToken() public view returns (uint256) {
        return balance[msg.sender];
    }

    function getStakeholderPosition(
        address _address
    ) public view returns (Stakeholder memory) {
        return stakeholders[_address];
    }
}
