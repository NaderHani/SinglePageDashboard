import { ArrowDownCircleIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'

export default function DashboardTable() {
    let usersArr = [
      {
        name: "Jane Cooper",
        Company: "Microsoft",
        phone: "(225) 555-0118",
        Email: "jane@microsoft.com",
        country: "United States",
        status: "Active",
      },
      {
        name: "Jane Cooper",
        Company: "Microsoft",
        phone: "(225) 555-0118",
        Email: "jane@microsoft.com",
        country: "United States",
        status: "Active",
      },
      {
        name: "Jane Cooper",
        Company: "Microsoft",
        phone: "(225) 555-0118",
        Email: "jane@microsoft.com",
        country: "United States",
        status: "inactive",
      },
      {
        name: "Jane Cooper",
        Company: "Microsoft",
        phone: "(225) 555-0118",
        Email: "jane@microsoft.com",
        country: "United States",
        status: "Active",
      },
      {
        name: "Jane Cooper",
        Company: "Microsoft",
        phone: "(225) 555-0118",
        Email: "jane@microsoft.com",
        country: "United States",
        status: "Active",
      },
      {
        name: "Jane Cooper",
        Company: "Microsoft",
        phone: "(225) 555-0118",
        Email: "jane@microsoft.com",
        country: "United States",
        status: "inactive",
      },
    ];
    const [users,setUsers] = useState([]); 
    useEffect(()=>{setUsers(usersArr)},[])
  return (
    <div className="m-auto bg-white p-7 rounded-[20px]">
      <div className="flex w-full mb-5 justify-between">
        <div>
          <h3 className="text-3xl font-bold">All Customers</h3>
          <p className="text-green-500 mt-1">Active Members</p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="border px-3 py-2.5 border-gray-200 rounded-l"
          />
          <button className="border px-3 py-2.5 text-gray-700 border-gray-200 rounded-r-2xl bg-gray-100">
            <span className="text-gray-500">Sort by :</span> Newest
            <ArrowDownCircleIcon className="inline ms-1 " size={20} />
          </button>
        </div>
      </div>
      
        

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-gray-500 text-sm border-b">
                  <th className="pb-4">Customer Name</th>
                  <th className="pb-4">Company</th>
                  <th className="pb-4">Phone Number</th>
                  <th className="pb-4">Email</th>
                  <th className="pb-4">Country</th>
                  <th className="pb-4">Status</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={index}
                    className="border-b last:border-none hover:bg-gray-50 transition"
                  >
                    <td className="py-4 font-medium text-gray-800">
                      {user.name}
                    </td>
                    <td className="py-4 text-gray-600">{user.Company}</td>
                    <td className="py-4 text-gray-600">{user.phone}</td>
                    <td className="py-4 text-gray-600">{user.Email}</td>
                    <td className="py-4 text-gray-600">{user.country}</td>
                    <td className="py-4">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
            <p>Showing data 1 to 8 of 256K entries</p>

            <div className="flex gap-2 items-center">
              <button className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 transition">
                &lt;
              </button>

              <button className="px-3 py-1 rounded-md bg-blue-600 text-white">
                1
              </button>
              <button className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 transition">
                2
              </button>
              <button className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 transition">
                3
              </button>
              <button className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 transition">
                4
              </button>

              <span className="px-2">...</span>

              <button className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 transition">
                40
              </button>

              <button className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 transition">
                &gt;
              </button>
            </div>
          </div>
        </div>
      

  );
}
