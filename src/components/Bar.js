import react from 'react'

import {NavLink} from 'react-router-dom'
import image6 from '../assets/image6.png'

const Bar=()=>{
    return(
        <div style={{display:'flex',flexDirection:'column'}}>
    <div style={{height: '6vh',display:'flex',justifyContent:'space-evenly',alignItems:'center'}} >

    <NavLink className="mx-1" exact to='/' style={{fontSize:'18px', fontWeight: '500',textDecoration:'none',color:'graytext'}}>Details</NavLink>
    <NavLink className="mx-1" exact to='/' style={{fontSize:'18px', fontWeight: '500',textDecoration:'none',color:'graytext'}}>Delivery</NavLink>
    <NavLink className="mx-1" exact to='/' style={{fontSize:'18px', fontWeight: '500',textDecoration:'none',color:'graytext'}}>Fit</NavLink>
    <NavLink className="mx-1" exact to='/' style={{fontSize:'18px', fontWeight: '500',textDecoration:'none',color:'graytext'}}>Share</NavLink>
    
    </div>
    <div  style={{height:'350px',width:'350px',marginLeft:'50px' }}>
        <p>The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. it has a straight fit with well defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel.</p>
           <p>See the <span style={{textDecoration:'underline'}} >EDITOR'S NOTE</span></p>
            <p>Learn about the <span style={{textDecoration:'underline'}}>DESIGNER</span></p>
        {/* <img src={image6} style={{height:'350px',width:'300px',marginLeft:'50px' }} /> */}
    </div>
   
    </div>
    )
}
export default Bar;