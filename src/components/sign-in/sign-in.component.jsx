import React from "react";

import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({eamil: '', password: '' })
  }
 
  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value })
  }

  render() {
    return(
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit} >
          <FormInput 
            required 
            name="email" 
            type="email" 
            label="email"
            value={this.state.email} 
            handleChange={this.handleChange}
          />

          <FormInput 
            required 
            name="password" 
            type="password" 
            label="password"
            value={this.state.password} 
            handleChange={this.handleChange}   
          />

          <CustomButton type="submit" > Sign In </CustomButton>
          <CustomButton onClick={signInWithGoogle} > Sign in with Google </CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn;