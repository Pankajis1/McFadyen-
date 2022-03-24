import React from "react";
import { NavLink } from "react-router-dom";
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'

// import { NavLink } from "react-router-dom";

const PhotoSection=()=>{
    return(
    <div style={{display:'flex',flexDirection:'column'}}>

        <img src={image1} style={{height:'800px',width:'600px',padding:'5px',marginTop:'10px' }} />
        <div style={{display:'flex',flexDirection:'row'}}>
        <img src={image2}style={{height:'400px',width:'300px',padding:'5px' }}/>
        <img src={image3}style={{height:'400px',width:'300px',padding:'5px' }}/>
            </div>
        <img src={image4} style={{height:'800px',width:'600px',padding:'5px' }}/>
        <img src={image5} style={{height:'800px',width:'600px',padding:'5px' }}/>   

        <div style={{display:'flex',justifyContent:'space-evenly',margin:'50px'}} >
        <NavLink className="mx-1" exact to='/' style={{fontSize:'18px', fontWeight: '500',textDecoration:'underline',color:'#000'}} >JONATHAN SIMKHAI</NavLink>
        <NavLink className="mx-1" exact to='/' style={{fontSize:'18px', fontWeight: '500',textDecoration:'underline',color:'#000'}} >BLAZERS</NavLink>
        <NavLink className="mx-1" exact to='/' style={{fontSize:'18px', fontWeight: '500',textDecoration:'underline',color:'#000'}} >VISCOSE</NavLink>
        </div>
        <div>
        <h6 style={{marginLeft:'180px',fontWeight:'1000' }} >A NOTE FROM THE EDITOR</h6>
    </div>
    <div style={{display:'flex',justifyContent:'center' }} >
        <p>
        The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky.
        </p>
        
    </div>
    <div style={{display:'flex',justifyContent:'center' }} ><p> - By <span style={{textDecoration:'underline'}} >MINNA SHIM</span>, Fashion Editor</p></div>


    </div>
    )


}
export default PhotoSection;