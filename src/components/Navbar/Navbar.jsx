
import { ArrowRightIcon, BadgePercentIcon, Box, CircleHelp, KeyRoundIcon, LayoutDashboard, User, Wallet} from 'lucide-react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <>
      <div className="w-full  h-screen py-10">
        <div className="logo">
          <div className="flex justify-center items-center ">
            <LayoutDashboard className=" me-1.5" size={30} />
            <h1 className="font-bold text-3xl">
              DashBoard <span className="text-sm text-gray-400">v.01</span>
            </h1>
          </div>
        </div>
        <div className="flex flex-col w-[85%] mx-auto mt-6">
          <Link className="flex justify-between py-3 px-5 my-2 items-center rounded-xl text-gray-400 hover:bg-blue-700 transition duration-500  hover:text-white">
            <div className="flex items-center">
              <KeyRoundIcon
                size={25}
                className="me-2 border-2 rounded-[8px] p-0.5"
              />
              <p className="text-l">Dashboard</p>
            </div>
          </Link>
          <a className="flex justify-between py-3 px-5 my-2 items-center rounded-xl text-gray-400 hover:bg-blue-700 transition duration-300  hover:text-white">
            <div className="flex items-center">
              <Box size={25} className="me-2 border-2 rounded-[8px] p-0.5" />
              <p className="text-l">Product</p>
            </div>
            <ArrowRightIcon />
          </a>
          <a className="flex justify-between py-3 px-5 my-2 items-center rounded-xl text-gray-400 hover:bg-blue-700 transition duration-300  hover:text-white">
            <div className="flex items-center">
              <User size={25} className="me-2 border-2 rounded-[8px] p-0.5" />
              <p className="text-l">Customers</p>
            </div>
            <ArrowRightIcon />
          </a>
          <a className="flex justify-between py-3 px-5 my-2 items-center rounded-xl text-gray-400 hover:bg-blue-700 transition duration-300  hover:text-white">
            <div className="flex items-center">
              <Wallet size={25} className="me-2" />
              <p className="text-l">Income</p>
            </div>
            <ArrowRightIcon />
          </a>
          <a className="flex justify-between py-3 px-5 my-2 items-center rounded-xl text-gray-400 hover:bg-blue-700 transition duration-300  hover:text-white">
            <div className="flex items-center">
              <BadgePercentIcon size={25} className="me-2" />
              <p className="text-l">Promote</p>
            </div>
            <ArrowRightIcon />
          </a>
          <a className="flex justify-between py-3 px-5 my-2 items-center rounded-xl text-gray-400 hover:bg-blue-700 transition duration-300  hover:text-white">
            <div className="flex items-center">
              <CircleHelp size={25} className="me-2" />
              <p className="text-l">Help</p>
            </div>
            <ArrowRightIcon />
          </a>
        </div>
      </div>
    </>
  );
}
