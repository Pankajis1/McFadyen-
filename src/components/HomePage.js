import React from "react";
import PhotoSection from "./PhotoSection";
import Navbar from "./Navbar";
import Bar from "./Bar";
import OrderSection from './OrderSection';

const Homepage=()=>{
    return(

        <div>

           <Navbar/>
              <div style={{display:'flex',flexDirection:'row'}} >

                   <Bar/>
                   <PhotoSection/>
                   <OrderSection/>
      
               </div>
      
        </div>
    )
}
export default Homepage;