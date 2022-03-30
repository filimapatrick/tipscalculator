import React from 'react'
import styled from 'styled-components'
import Input from './Input';
import Button from './Button';
import A1 from '../img/images/icon-dollar.svg'
import A2 from '../img/images/icon-person.svg'



function LeftCard() {
    const LeftCard = styled.div`
    
    width:100%;
    height:27.2rem;
    background-color:var(--card-bg);
    .select_tip{
        padding-top:1.5rem;
        padding-bottom:0.5rem;
       z-index:90;
    }

  

    .leftbuttonrow1 .leftbuttonrow2{
        display:flex;
        padding-left:-2rem;
    }
    `
  return (
    <LeftCard>
        <div>BILL</div>
<img src={A1}/>
      <Input/>
<div className='select_tip'>Select Tip %</div>
<div className='left_buttons'>
<section className='leftbuttonrow1'>
<Button>5%</Button>
<Button>10%</Button>
<Button>15%</Button>
</section>

<section className='leftbuttonrow2'>
<Button>25%</Button>
<Button>50%</Button>
<Button >Customs</Button>
</section>
</div>
<div className='select_tip'>Number of People</div>
<img src={A2}/>
<Input/>
    </LeftCard>
  )
}

export default LeftCard