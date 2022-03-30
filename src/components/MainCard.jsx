import React from 'react'
import styled from 'styled-components'
import LeftCard from './LeftCard'
import RightCard from './RightCard'

function MainCard() {
    const MainCard = styled.div`
        background-color: var(--card-bg);
        border-radius: 10px;
        margin-left: auto;
        margin-right: auto;
        height:500px;
        width:900px;
       margin-top:8rem;
       z-index:1;

       .card_body{
           padding:2rem;
           display:flex;
       }
      
       
    `
  return (
    <MainCard>
<div className='card_body'>
<LeftCard/>
<RightCard/>

</div>
    </MainCard>
  )
}

export default MainCard