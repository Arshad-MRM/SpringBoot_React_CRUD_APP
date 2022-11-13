import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const [employeename, setEmployeename] = useState("");
  const [address, setAddress] = useState("");
  const [salary, setSalary] = useState("");

  const navigate = useNavigate();
  const data = {
    employeename: employeename,
    address: address,
    salary: salary,
  };

  function submitForm(e) {
    e.preventDefault();
    axios.post("http://localhost:9191/addEmployee", data).then(navigate("/"));
  }
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">ADD USER</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={employeename}
          onChange={(e) => setEmployeename(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter Name"
        />
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter Address"
        />
        <input
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="number"
          placeholder="Enter Salary"
        />
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={submitForm}
        >
          ADD EMPLOYEE
        </button>
      </form>
    </div>
  );
}

export default Add;
