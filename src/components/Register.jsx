import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast"; //using to show the message

//Creating Registeraion function
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Creating Valid Email Schema (to check with a entered email,
  //  if both the Schemas match so it will return true else false)
  const emailValidate = /^[a-zA-Z]{1,}[a-zA-Z0-9]{1,}[@][a-z]{2,}[.][a-z]{2,5}/;

  //handlForm submit function (it will run after form submission and  will check  the conditions)
  const handleForm = async (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      toast.error("Fill all the details");
    } else if (emailValidate.test(email) !== true) {
      toast.error("Please Enter Valid Email id !");
    } else {
      toast.success("User registered successfully !");
      setEmail("");
      setPassword("");
      setName("");
    }
  };

  return (
    <div className="signup template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form_container p-5 rounded bg-white">
        <form onSubmit={handleForm}>
          <h3 className="text-center">Registration Form</h3>

          <div className="mb-2">
            <label htmlFor="fname">Name</label>
            <input
              type="text"
              value={name}
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              placeholder="Enter Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              placeholder="Enter Password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button className="btn btn-primary">Sign in</button>
          </div>

          <p className="text-end mt-2">
            Already have an Account ?
            <Link to="#" className="ms-2">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register; //exporting this function to use somewhere by importing it
