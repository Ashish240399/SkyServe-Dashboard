import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/UserContext';

const Login = () => {
    const { findUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password:""
    });
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        let present = false;
        const data =await fetch("http://localhost:8080/users");
        const res = await data.json();
        for (let i = 0; i < res.length; i++){
            if (res[i].email === user.email && res[i].password === user.password) {
                present = true;
                findUser(res);
                break;
            }
        }
        if (present) {
            alert("Login successful");
            navigate("/");
        }
        else {
            alert("Login failed");
        }
    }
  return (
      <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
              <input onChange={handleChange} name='email' type="text" />
              <input onChange={handleChange} name='password' type="password" />
              <input type="submit" value="Login"/>
          </form>
          <button onClick={() => {
              navigate("/register");
          }}>Register</button>
      </div>
      
  )
}

export default Login