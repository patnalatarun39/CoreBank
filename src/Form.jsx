import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deposit, withdraw } from "./Store";

const Form = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedId, setSelectedId] = useState("");

  const addCustomer = () => {
    if (!name || !mobile) return;
    dispatch(addUser({ fullname: name, mobile }));
    setName("");
    setMobile("");
  };

  const depositMoney = () => {
    dispatch(deposit({ id: Number(selectedId), amount }));
    setAmount("");
  };

  const withdrawMoney = () => {
    dispatch(withdraw({ id: Number(selectedId), amount }));
    setAmount("");
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-xl space-y-6">

      <h2 className="text-xl font-semibold text-gray-700">Add Customer</h2>

      <input
        className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Full name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Mobile"
        value={mobile}
        onChange={e => setMobile(e.target.value)}
      />

      <button
        onClick={addCustomer}
        className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
      >
        Add Customer
      </button>

      <hr />

      <h2 className="text-xl font-semibold text-gray-700">Transaction</h2>

      <select
        value={selectedId}
        onChange={e => {
          console.log("selected:", e.target.value)
          setSelectedId(e.target.value)}}
        className="w-full border p-2 rounded-lg focus:outline-none"
      >
        <option value="">Select user</option>
        {users.map(user => (
          <option key={user.id} value={user.id}>
            {user.fullname}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        className="w-full border p-2 rounded-lg focus:outline-none"
      />

      <div className="flex gap-3">
        <button
          onClick={depositMoney}
          className="flex-1 bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition"
        >
          Deposit
        </button>

        <button
          onClick={withdrawMoney}
          className="flex-1 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition"
        >
          Withdraw
        </button>
      </div>

    </div>
  );
};

export default Form;