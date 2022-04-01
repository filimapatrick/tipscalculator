import React from 'react'
import styled from 'styled-components'

function Button({children}) {
    const Button = styled.button`
    background:${props => props.primary ? '#0A4746' : 'brown'};
    color:${props => props.primary ? 'white' : '#2DC1AE'};
    font-size:1em;
    margin:1em;

    border-radius:5px;
    height:45px;
    width:100px;
    margin-right:-6px;
    font-weight:bold;

    &:hover {
    background-color: white; 
    color:black;
    border:2px solid #0A4746;
    cursor: pointer;
  }

    
    `
  return (
    <>
<Button primary>{children}</Button>


    
    </>
  )
}

export default Button