import React,{ useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
import Close from '../img/images/icon-dollar.svg';

function Modal({show, close,title, children}) {
  const [percentageTip, setPercentageTip] = useState(0);
  const [billAmount, setBillAmount] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);




    const ModalStyle = styled.div`
      .modalContainer {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba($color: #000000, $alpha: 0.35);
        display: flex;
        justify-content: center;
        align-items: center;


        .modal {
          width: 30vw;
          height: auto;
          background-color: #fff;
          padding: 2rem;
          border-radius: 20px;
          background-color: rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(5px);
          box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);


          &_header {
            position: relative;
            border-bottom: 1px solid #dddddd;


            &-title {
              text-align: center;
            }

            .bill_amount > label{
              font-size: 1.5rem;
            }

            .close {
              position: absolute;
              top: 0;
              right: 0;
              background: transparent;


              img {
                width: 1rem;
                height: auto;
                transition: all 0.3s;
              }


              &:hover {
                img {
                  transform: scale(1.1);
                }
              }
            }
          }


          &_content {
            border-bottom: 1px solid #dddddd;
            padding: 2rem 0;
          }


          &_footer {
            padding: 2rem 0;
            padding-bottom: 0;


            button {
              float: right;
              padding: 0.5rem;
              border-radius: 8px;
            }


            .modal-close {
              background-color: transparent;
              font-weight: 600;


              &:hover {
                color: rgba(54, 67, 72, 0.8);
              }

            }


            .submit {
              margin-right: 1rem;
              background-color: #364348;
              color: #fff;


              &:hover {
                background-color: rgba(54, 67, 72, 0.8);
              }
            }
          }
        }
      }
    `;


const calculate = (e) => {
  e.preventDefault();
  const formValid = +billAmount > 0 && +percentageTip > 0;
  if (!formValid) {
    return;
  }
  const tipAmount = +billAmount * (+percentageTip / 100);
  const total = +billAmount * (1 + percentageTip / 100);
  setTipAmount(tipAmount);
  setTotal(total);
};
 
  return (
    <ModalStyle>
      {
     show ?
     
      <div
        className="modalContainer"
        onClick={() => close()}
      >
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <header className="modal_header">
            <h2 className="modal_header-title"> {title} </h2>
            <button className="close" onClick={() => close()}>
              <img src={Close} alt="close" />
            </button>
          </header>
          <main className="modal_content">
            
            
          <form onSubmit={calculate}>

        <div className='bill_amount'>
          <label>bill amount</label>
          <input
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
          />
        </div>
        <div>
          <label>percentage tip</label>
          <input
            value={percentageTip}
            onChange={(e) => setPercentageTip(e.target.value)}
          />
        </div>
        <Button type="submit">calculate</Button>
      </form>
      <p>tip amount: {tipAmount.toFixed(2)}</p>
      <p>total: {total.toFixed(2)}</p>
            
            
            
            
            
             </main>
          <footer className="modal_footer">
            <button className='customs_btn' onClick={() => close()}>
              Cancel
            </button>

          
          </footer>
        </div>
      </div>
      : null
     },

    </ModalStyle>
  )
}

export default Modal