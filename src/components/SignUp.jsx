import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { name, setName, email, setEmail, pass, setPass } = useContext(Context);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the email already exists
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      alert("User already exists");
    } else {
      // Add new user to the array
      const newUser = { name, email, pass };
      users.push(newUser);

      // Update localStorage
      localStorage.setItem("users", JSON.stringify(users));

      // Clear form fields
      setName("");
      setEmail("");
      setPass("");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleOnSubmit}
        className="flex flex-col gap-4 p-4 border-2 border-black rounded-md shadow-lg shadow-gray-500 bg-green-500"
      >
        <h1 className="text-white font-bold text-xl text-center">Sign Up</h1>
        <label htmlFor="username" className="self-start text-white">
          Username:
        </label>
        <input
          type="text"
          placeholder="Name"
          id="username"
          className="outline-none border-2 p-1 border-white rounded-md"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label htmlFor="email" className="self-start text-white">
          Email:
        </label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="outline-none border-2 p-1 border-white rounded-md"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="password" className="self-start text-white">
          Password:
        </label>
        <input
          type="password"
          placeholder="password"
          id="password"
          className="outline-none border-2 p-1 border-white rounded-md"
          onChange={(e) => setPass(e.target.value)}
          value={pass}
        />
        <button
          type="submit"
          className="border-2 border-green-950 p-1 w-full rounded-md bg-white"
        >
          Sign Up
        </button>
        <p className="text-bold text-white">
          Already have an account? <Link to={"/login"}>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
