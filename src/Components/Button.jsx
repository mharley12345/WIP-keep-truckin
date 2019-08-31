import React from 'react'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'
const StyledButton = styled.button`
border:2px solid black;
border-radius: 8px;
width:30%;
align-self: center;

margin-top:2rem;
background:grey;
`
const Button = props =>{
    return(
        <StyledButton color='blue' fluid size='large'>
                    {props.isSubmitting ? 
                      <Loader type="ThreeDots" color="white" height={10} /> 
                      : 
                      'Sign Up' 
                    }
                  </StyledButton>
    )
}
export default Button