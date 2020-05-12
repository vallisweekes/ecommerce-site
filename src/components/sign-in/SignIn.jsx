import React, { useState } from 'react';
import FormInput from '../form-input/FormInput';

const SignIn = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ email: '', password: '' });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setValues({ ...values, [name]: value });
    console.log(values);
  };
  return (
    <div>
      <h2>I already have and account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={values.email}
          handleChange={handleChange}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={values.password}
          handleChange={handleChange}
          label="password"
          required
        />
        <input type="submit" value="Submit From" />
      </form>
    </div>
  );
};

export default SignIn;
