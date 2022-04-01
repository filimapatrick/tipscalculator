import React,{useState} from 'react'
import styled from 'styled-components'
import Input from './Input';
import Button from './Button';
import A1 from '../img/images/icon-dollar.svg'
import A2 from '../img/images/icon-person.svg'
import Modal from './Modal';



function LeftCard() {
  const [modal, setModal] = useState(false);
  const Toggle = ()=> setModal(!modal)


  
    const LeftCard = styled.div`
    
    width:100%;
    height:27.2rem;
    background-color:var(--card-bg);
    .select_tip{
        padding-top:1.5rem;
        padding-bottom:0.5rem;
       z-index:90;
    }

    .customs_btn{
      background-color:white;
    color:${props => props.primary ? 'white' : 'palevioletred'};
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
<Button backgroundColor="yellow">5%</Button>
<Button>10%</Button>
<Button>15%</Button>
</section>

<section className='leftbuttonrow2'>
<Button>25%</Button>
<Button>50%</Button>
<button className='customs_btn'  onClick={()=> Toggle()}>Customs</button>

</section>
</div>
<div className='select_tip'>Number of People</div>
<img src={A2}/>
<Input/>
<Modal show={modal} title='Set your Bill'  close={Toggle}/>
    </LeftCard>
  )
}

export default LeftCard