import { useGlobalState } from "./store";

const background =
  "https://images.unsplash.com/photo-1639322537231-2f206e06af84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80";
const Hero = () => {
  const [connectedAccount] = useGlobalState("connectedAccount");

  return (
    <diV
      className=" p-60 md:px-40 "
      style={{ background: `url('${background}') fixed no-repeat top/cover ` }}
    >
      <div className="flex  items-center justify-between text-white py-5">
        <div>
          <h2 className="text-3xl font-bold mt-1">
            Register Organizations and Tokens with Ease{" "}
          </h2>
          <h3 className="text-xl font-semibold mt-6">
            {" "}
            Customize Rewards for Stakeholdersc and Grant Rewards After the
            Vesting Period
          </h3>
        </div>
        <div className="hidden lg:flex items-center space-x-3 font-semibold opacity-50 "></div>
      </div>
      {connectedAccount ? (
        <div className="flex justify-between items-center ">
          <div className=" flex justify-start items-start pb-5">
            <a
              href={"/Admin"}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl cursor-pointer uppercase shadow-md
              shadow-gray-600 font-bold p-3"
            >
              Organisation Login
            </a>
          </div>
          <div className=" flex pb-5 ">
            <a
              href={"/User"}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl cursor-pointer uppercase shadow-md
              shadow-gray-600 font-bold p-3"
            >
              User Login
            </a>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center text-red-200 text-4xl font-semibold mt-6">
          Connect Your Wallet to Register or Claim Token
        </div>
      )}
    </diV>
  );
};

export default Hero;
