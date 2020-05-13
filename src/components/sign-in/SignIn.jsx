import React, { useState } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in-styles.scss';
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
    <div className="sign-in">
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
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <div onClick={signInWithGoogle}>
            <CustomButton className="custom-button" isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
