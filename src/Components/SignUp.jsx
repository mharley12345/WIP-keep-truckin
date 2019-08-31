import React from 'react'
import Button from './Button'

const SignUp = (props) =>{

    return(
        <div className="signUpForm">
      <h1>Welcome To Keep Truckin</h1>

          <form>
          <label>User Name</label>
          <br/>
     
         <input/><br/><br/>
        <label>Password</label><br/>
        <input/><br/>
         <Button type="submit" placeholder="Submit" onSubmit={props.HandleSubmit}></Button><br/>

        <a href="./LogIn.jsx">Already Have An Account?</a>
            
          </form>

  
      </div>
      
    )
}
export default SignUp