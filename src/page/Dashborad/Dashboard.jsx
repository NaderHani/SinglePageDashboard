import { ArrowDown, ArrowUp, Search, UserCheck2, Users2Icon } from "lucide-react";
import React from "react";
import DashboardTable from "./DashboardTable";

export default function Dashboard() {
  return (
    <>
      <div className="px-10">
        <div className="flex items-center justify-between mx-2 pt-10 w-full">
          <div>
            <h2 className="text-2xl">Hello, Evano 👋🏼,</h2>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search"
              className="bg-white py-1 px-2 border border-gray-200 rounded-[5px]"
            />
          </div>
        </div>
        <div className="mt-7">
          <div className="grid grid-cols-12 bg-white rounded-4xl p-3">
            <div className="col-span-4 flex mx-10 py-2.5">
              <div className="flex items-center me-5">
                <div className="bg-green-200 rounded-full w p-7 text-green-600">
                  <Users2Icon size={30} />
                </div>
              </div>
              <div className="flex flex-col">
                <p>Total Customers</p>
                <p className="text-3xl font-bold">5,423</p>
                <p>
                  <span className="text-green-600 text-center me-0.5">
                    {" "}
                    <ArrowUp className="inline" />
                    16%
                  </span>
                  this month
                </p>
              </div>
            </div>
            <div className="col-span-4 flex mx-10 py-2.5">
              <div className="flex items-center me-5">
                <div className="bg-green-200 rounded-full w p-7 text-green-600">
                  <UserCheck2 size={30} />
                </div>
              </div>
              <div className="flex flex-col">
                <p>Members</p>
                <p className="text-3xl font-bold">1,893</p>
                <p>
                  <span className="text-red-600 text-center me-0.5">
                    {" "}
                    <ArrowDown className="inline" />
                    1%
                  </span>
                  this month
                </p>
              </div>
            </div>
            <div className="col-span-4 flex mx-10 py-2.5">
              <div className="flex items-center me-5">
                <div className="bg-green-200 rounded-full w p-7 text-green-600">
                  <Users2Icon size={30} />
                </div>
              </div>
              <div className="flex flex-col">
                <p>Active Now</p>
                <p className="text-3xl font-bold">198</p>
               
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
            <DashboardTable/>
        </div>
      </div>
    </>
  );
}
