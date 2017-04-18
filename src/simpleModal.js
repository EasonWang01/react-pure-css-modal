import React,{ Component } from 'react';
import '../simpleModal.css'

const Modal = (props) => (
     <div >
       <input  className="yicheng-modal-state" id={props.id} type="checkbox" />  
       <div className="yicheng-modalbg" style={{width: '100%', height: '100%', background: 'rgba(0,0,0, .6)', position: 'fixed', top: '0', left: '0'}}>
         <div className="yicheng-modalWhite" style={Object.assign({zIndex:'100',width: '50%', height: '50%', background: 'white', position: 'fixed', top: '25%', left: '25%', overflowY: 'scroll'},props.style)} >
          {props.children}
         </div> 
         <label onClick={() => props.onClose()} className="yicheng-modal__bg" htmlFor={props.id}></label>
       </div>     
     </div>
)

export default Modal;