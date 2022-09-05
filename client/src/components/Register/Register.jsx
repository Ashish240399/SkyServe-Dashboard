import React from 'react'

const Register = () => {
  return (
      <div>
          <form>
              <label>Name</label>
              <input type="text" />
              <label>Email</label>
              <input type="text" />
              <label>Password</label>
              <input type="password" />
              <input type="submit" />
          </form>
    </div>
  )
}

export default Register