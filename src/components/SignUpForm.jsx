import React, { useState } from 'react';

function SignUpForm() {
  const [formData, setFormData] = useState({
    fname: '', lname: '', email: '', password: '', confirmPassword: ''
  });

  //handle form input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prevState => ({...prevState,[name]: value }));
  }

  // handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    setFormData({
      fname: '',
      lname: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  }
  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label><br />
        <input type="text" id="fname" name="fname" value={formData.fname} onChange={handleChange}required /><br />
        <label>Last Name:</label><br />
        <input type="text" id="lname" name="lname" value={formData.lname} onChange={handleChange} required /><br />
        <label>Email:</label><br />
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /><br />
        <label>Password:</label><br />
        <input type="password" id="password"name="password" value={formData.password} onChange={handleChange} required/><br />
        <label>Confirm Password:</label><br />
        <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required/><br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;