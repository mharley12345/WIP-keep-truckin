import React from 'react'
import styled from 'styled-components'
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
        <StyledButton  type={Button} className="Button">{props.placeholder}</StyledButton>
    )
}
export default Button