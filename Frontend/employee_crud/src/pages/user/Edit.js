import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Add() {
  const [employeename, setEmployeename] = useState("");
  const [address, setAddress] = useState("");
  const [salary, setSalary] = useState("");

  const { id } = useParams();
  console.log("id: ", id);

  useEffect(() => {
    axios.get(`http://localhost:9191/employeeById/${id}`).then((res) => {
      console.log("res: ", res.data);
      setEmployeename(res.data.employeename);
      setAddress(res.data.address);
      setSalary(res.data.salary);
    });
  }, []);

  const navigate = useNavigate();

  const data = {
    id: id,
    employeename: employeename,
    address: address,
    salary: salary,
  };

  function Update(e) {
    e.preventDefault();
    axios.put(`http://localhost:9191/update`, data).then(navigate("/"));
  }
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">Employee Details</h2>
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
          onClick={Update}
        >
          UPDATE EMPLOYEE
        </button>
      </form>
    </div>
  );
}

export default Add;
