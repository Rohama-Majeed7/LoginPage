import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

const Login = () => {
  const { newEmail, setNewEmail, newPass, setNewPass } = useContext(Context);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the email and password match any user
    const user = users.find((user) => user.email === newEmail && user.pass === newPass);

    if (user) {
      alert("Login Successful");
    } else {
      alert("Invalid user");
    }
    setNewEmail("");
    setNewPass("");
  };
   const handleOnLogout = () => {
    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    // Check if the email and password match any user
    const user = users.filter((user) => user.email !== newEmail && user.pass !== newPass);

    if (user) {
      alert("Logout Successful");
    } else {
      alert("Invalid user");
    }
    localStorage.setItem("users", JSON.stringify(user));
    setNewEmail("");
    setNewPass("");
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleOnSubmit}
        className="flex flex-col gap-4 p-4 border-2 border-black rounded-md shadow-lg shadow-gray-500 bg-green-500"
      >
      <p  className="font-bold text-white cursor-pointer" onClick={handleOnLogout}>LogOut</p>
        <h1 className="text-white font-bold text-xl text-center">Login</h1>
        <label htmlFor="email" className="self-start text-white">
          Email:
        </label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="outline-none border-2 p-1 border-white rounded-md"
          onChange={(e) => setNewEmail(e.target.value)}
          value={newEmail}
        />
        <label htmlFor="password" className="self-start text-white">
          Password:
        </label>
        <input
          type="password"
          placeholder="password"
          id="password"
          className="outline-none border-2 p-1 border-white rounded-md"
          onChange={(e) => setNewPass(e.target.value)}
          value={newPass}
        />
        <button
          type="submit"
          className="border-2 border-green-950 p-1 w-full rounded-md bg-white"
        >
          Login
        </button>
        <p className="text-bold text-white">
          Do not have an account? <Link to={"/"}>Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
