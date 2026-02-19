import React from "react";
import { useSelector } from "react-redux";

const UserTable = () => {
  const users = useSelector(state => state.users);

  return (
    <div className="max-w-3xl mx-auto mt-8 bg-white shadow-lg rounded-xl p-6">

      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Customers
      </h2>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Mobile</th>
            <th className="p-3 border">Balance</th>
          </tr>
        </thead>

        <tbody>
          {users.map(user => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="p-3 border">{user.fullname}</td>
              <td className="p-3 border">{user.mobile}</td>
              <td className="p-3 border font-medium">
                ₹ {user.balance}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default UserTable;