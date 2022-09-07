import React from 'react';
import "./Login.css";
import { useContext } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
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
                findUser(res[i]);
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
      <div className='login-mainPage'>
          <div className="form-div">
              <p>PLease Login</p>
              <form onSubmit={handleSubmit}>
                  <label>Enter Name</label>
                  <input className='form-input' onChange={handleChange} name='email' type="text" required />
                  <label>Enter Password</label>
                    <input className='form-input' onChange={handleChange} name='password' type="password" required />
                  {/* <input className="login-btn" type="submit" value="Submit" /> */}
                  <button className="form-btn" type='submit'>Submit</button>
                </form>
          </div>
          
          <Link className='link' to="/register">Don't have an account.Please Register!</Link>
      </div>
      
  )
}

export default Login