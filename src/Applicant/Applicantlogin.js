import React, { useState } from "react";

import { Link } from "react-router-dom";
export default function Applicantlogin() {
  //const notify = () => toast("Welcome HR");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      setEmail(value);
      clearError("email");
    } else if (name === 'password') {
      setPassword(value);
      clearError("password");
    }
  };
  const clearError = (fieldName) => {
    const updatedErrors = { ...errors };
    delete updatedErrors[fieldName];
    setErrors(updatedErrors);
  };


  
  const handleSubmit=(e)=> {
   
    e.preventDefault();
    const validationErrors = {};
    

    if (!email) {
      validationErrors.email = 'Username is required';
    }
  
    if (!password) {
      validationErrors.password = 'Password is required';
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      
    }
    
   

  }
  return (
    <div className="main">
      
      <div className="login" class="container">
      <h3>Login </h3>
    <form onSubmit={handleSubmit} class="form-table">
      
      <div className="email" class="form-group">
      <input class="form-control"
          type="email" 
          value={email}
          name="email"
          onChange={handleInputChange}
        placeholder="Enter Email"/>
        {errors.password && <p class="error" style={{fontWeight:"600"}}>{errors.email}</p>}
      </div>
 
      <div  className="password" class="form-group">
      <label>
      <input class="form-control"
          type="password" 
          name="password"
          value={password}
          onChange={handleInputChange}
        placeholder="Password"/>
        {errors.password && <p class="error">{errors.password}</p>}
      </label>
      </div>
      <div class="d-grid gap-2">
      <button type="submit"  class="btn btn-Link" ><Link to="/applicantregister">Sign In</Link></button>
      </div>
     </form>
</div>
    </div>
  );

  }