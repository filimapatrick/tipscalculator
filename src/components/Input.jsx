import React from 'react';
import styled from 'styled-components';


function Input() {
    const Input = styled.input` 
    background-color:#F2F3F4;
    color:black;
    width:20.8rem;
    height:2.5rem;
    margin-top:1rem;
    border-radius:5px;
    margin-bottom:2rem;
    

    &:focus{
        background-color:#3CBC8D;
        border:var(--rightcard-bg);
        color:white;
        font-size:1.5rem;
    }

  

    `
   
  return (
   

    <Input/>
  )
}

export default Input