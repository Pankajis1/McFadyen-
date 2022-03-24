import React, { useState } from "react";

import image7 from '../assets/image7.png';
import image from '../assets/image8.png';

const Order=()=>{
    let [Size, setSize]=useState('S')
    const handelSize=(value)=>{
        setSize(value)
    }

    return(
        <div style={{display:'flex',flexDirection:'column' }} >

          <h2 style={{marginTop:'20px',display:'flex',flexDirection:'column' }}>
              <span>JONATHAN</span>  
              <span>SIMKHAI</span>
         </h2>
          <p style={{fontSize:'16px', fontWeight: '700',textDecoration:'none',color:'#000' }} >Lurex Linen Viscose Jacket in Conchiglia</p>
          <h6>$225</h6>

          <h6 style={{marginTop:'20px'}} ><span style={{fontWeight:'bold'}} >COLOR</span> <span>CONCHIGLIA</span> </h6>

          <div>
              <button><img src={image7} style={{height:'50px',width:'50px'}} /></button> 
              <button><img src={image} style={{height:'50px',weight:'50px'}} /></button> 
         </div>

          <h5 style={{display:'flex', justifyContent:'space-between',marginTop:'20px' }}><span>SIZE {Size}</span>  <span style={{textDecoration:'underline',marginRight:'40px' }} >SIZE GUIDE</span></h5>

          <div style={{display:'flex',flexWrap:'wrap'}} >
              <button onClick={()=>handelSize('XS') } style={{margin:'5px',height:'25px',width:'80px',borderRadius:'12px',backgroundColor:'transparent',padding:'0px',lineHeight:'15px'}} >XS</button>
              <button onClick={()=>handelSize('S') } style={{margin:'5px',height:'25px',width:'80px',borderRadius:'12px',backgroundColor:'transparent',padding:'0px',lineHeight:'15px'}} >S</button>
              <button onClick={()=>handelSize('M') } disabled style={{margin:'5px',height:'25px',width:'80px',borderRadius:'12px',backgroundColor:'transparent',padding:'0px',lineHeight:'15px'}} >M</button>
              <button onClick={()=>handelSize('L') } style={{margin:'5px',height:'25px',width:'80px',borderRadius:'12px',backgroundColor:'transparent',padding:'0px',lineHeight:'15px'}} >L</button>
              <button onClick={()=>handelSize('XXL') } style={{margin:'5px',height:'25px',width:'80px',borderRadius:'12px',backgroundColor:'transparent',padding:'0px',lineHeight:'15px'}} >XXL</button>
              
          </div>
          <button style={{margin:'5px',height:'50px',width:'350px',borderRadius:'12px',backgroundColor:'black',color:'white' }} >ADD TO BAG <i class="fa-solid fa-arrow-right-long" style={{color:'white'}} ></i></button>
          <div>
              <p style={{marginTop:'20px',marginRight:'40px'}} >
                  <span>Get 4 intrest-free payments of $196.25 with Klarna</span>
                  <span><h6>LEARN MORE</h6></span>
              </p>
              <p><span>Speak to a Personal Stylist</span><spaan> CHAT NOW</spaan> </p>


            
          </div>       
        
        </div>
       




    )
}
export default Order;