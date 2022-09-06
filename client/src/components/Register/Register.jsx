import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

const Register = () => {
  const { findUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(
    {
      name: "",
      email: "",
      password: ""
    }
  );
  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    let userPresent = false;
    const data = await fetch("http://localhost:8080/users");
    const res = await data.json();
    for (let i = 0; i < res.length; i++) {
      if (res[i].email == userDetails.email) {
        userPresent = true;
        break;
      }
    }
    if (userPresent) {
      alert("Email already present");
      navigate("/login")
    }
    else {
      fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails)
      })
      findUser(userDetails);
      navigate("/login");
    }
  }
  return (
      <div>
          <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input onChange={handleChange} name='name' type="text" />
              <label>Email</label>
              <input onChange={handleChange} name='email' type="email" />
              <label>Password</label>
              <input onChange={handleChange} name='password' type="password" />
              <input type="submit" />
          </form>
    </div>
  )
}

export default Register