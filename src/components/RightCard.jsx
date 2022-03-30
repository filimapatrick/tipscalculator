import React from 'react'
import styled from 'styled-components'


function RightCard() {
    const RightCard = styled.div`
    background-color:var(--rightcard-bg);
    width:100%;
    height:27.2rem;
    border-radius:10px;

    .tip_amount {
        display:flex;
        justify-content:space-between;
        padding:3rem;
    }

    .total_amount{
        display:flex;
        justify-content:space-between;
        padding:3rem; 
    }

    h1{
        color:#2DC1AE;
        font-size:2rem;
    }
   

    p{
        color:#FFFFFF;
    }

    .btn{
        background-color:#2DC1AE;
        width:20rem;
        height:45px ;
        margin-top:5rem;
        font-size:1rem;
        font-weight:bold;


        &:hover{
            cursor: pointer;
            background-color:white;
            color:black;
            border: 3px solid #2DC1AE;

        }
    }

    .btn_section{
        display:flex;
        justify-content:center;
    }
    `
  return (
    <RightCard>
       <section> 
       <div className='tip_amount'>
       <p>Tip Amount</p>  <h1>$4.27</h1>
        </div>
       </section>



       <section> 
       <div className='total_amount'> 
       <p>Tip Amount</p>  <h1>$4.27</h1>
       </div>
       </section>
<div className='btn_section'>
<button className='btn'>RESET </button>
</div>

    </RightCard>
  )
}

export default RightCard