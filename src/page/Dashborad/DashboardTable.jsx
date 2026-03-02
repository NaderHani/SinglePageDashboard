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
        status: true,
      },
      {
        name: "Jane Cooper",
        Company: "Microsoft",
        phone: "(225) 555-0118",
        Email: "jane@microsoft.com",
        country: "United States",
        status: false,
      },
      {
        name: "Jane Cooper",
        Company: "Microsoft",
        phone: "(225) 555-0118",
        Email: "jane@microsoft.com",
        country: "United States",
        status: true,
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
          <button className="border px-3 py-2.5 text-gray-700 border-gray-200 rounded-r-2xl bg-gray-300">
            <span className="text-gray-500">Sort by :</span> Newest
            <ArrowDownCircleIcon className="inline ms-1 " size={20} />
          </button>
        </div>
      </div>
      <table className="w-full table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Customer</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.Company}</td>
              <td>{item.phone}</td>
              <td>{item.Email}</td>
              <td>{item.country}</td>

              {item.status ? (
                <td className="text-green border-green-500 bg-green-200 p-3">
                  active
                </td>
              ) : (
                <td className="text-red border-red-500 bg-red-200 p-3 rounded">
                  inactive
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
