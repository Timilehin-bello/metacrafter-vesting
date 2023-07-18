import { useGlobalState } from "./store";
import { connectWallet } from "./Blockchains";

const Navbar = () => {
  const [connectedAccount] = useGlobalState("connectedAccount");
  return (
    <header
      className={`flex justify-between p-5 top-0 z-0 shadow-blue-50 left-0 right-0 fixed bg-slate-200 `}
    >
      <div className="flex space-x-2 justify-between items-center font-light text-2xl text-black font-bold uppercase">
        <a href="/">
          {" "}
          <p>MetaCrafters Vesting DApp</p>
        </a>
      </div>

      <div className="flex text-black gap-10 ">
        <div className="flex space-x-8 justify-between items-center font-normal text-sm ">
          {connectedAccount ? (
            <div
              className="hover:cursor-pointer bg-blue-500 px-5 py-2 hover:bg-blue-600
                rounded-full shadow-md  shadow-slate-500 hover:shadow-slate-800 leading-tight uppercase "
            >
              {connectedAccount.slice(0, 4) +
                "..." +
                connectedAccount.slice(-5)}
            </div>
          ) : (
            <div>
              <button
                className="hover:cursor-pointer bg-blue-500 px-5 py-2 hover:bg-blue-600
                rounded-full shadow-md  shadow-slate-500 hover:shadow-slate-800 leading-tight uppercase "
                onClick={connectWallet}
              >
                connect Wallet{" "}
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
