import react from 'react';
import { NavLink } from 'react-router-dom';
// import { Navlink } from 'react-router';

const Navbar = () => {

    const content = (
        
        <div style={{height: '6vh',display:'flex',justifyContent:'space-evenly',alignItems:'center' }}>
        <div><h5 style={{marginTop:'25px' }} >MY COMPANY.COM</h5></div>
            <NavLink className="mx-1" exact to='/' style={{fontSize:'18px', fontWeight: '500',textDecoration:'none',color:'#000'}}>The Edit</NavLink>
            <NavLink className="mx-1" exact to='/' style={{fontSize:'18px', fontWeight: '500',textDecoration:'none',color:'#000'}}>New Arrivals</NavLink>
            <NavLink className="mx-1" exact to='/' style={{fontSize:'18px', fontWeight: '500',textDecoration:'none',color:'#000'}}>Designers</NavLink>
            <NavLink className="mx-1" exact to='/' style={{fontSize:'18px', fontWeight: '500',textDecoration:'none',color:'#000'}}>Clothing</NavLink>
            <NavLink className="mx-1" exact to='/' style={{fontSize:'18px', fontWeight: '500',textDecoration:'none',color:'#000'}}>Shoes</NavLink>
            <NavLink className="mx-1" exact to='/' style={{fontSize:'18px', fontWeight: '500',textDecoration:'none',color:'#000'}}>Bags</NavLink>
            <NavLink className="mx-1" exact to='/' style={{fontSize:'18px', fontWeight: '500',textDecoration:'none',color:'#000'}}>Accessories</NavLink>
            <NavLink className="mx-1" exact to='/' style={{fontSize:'18px', fontWeight: '500',textDecoration:'none',color:'#000'}}>Jewelry</NavLink>
            <NavLink className="mx-1" exact to='/' style={{fontSize:'18px', fontWeight: '500',textDecoration:'none',color:'#000'}}>Beauty</NavLink>
            <NavLink className="mx-1" exact to='/' style={{fontSize:'18px', fontWeight: '500',textDecoration:'none',color:'#000'}}>More</NavLink>

            <div>
                <i class="mx-3 fa-solid fa-magnifying-glass"/>
                <i class="mx-3 fa-solid fa-cart-shopping"/>
                <i class="mx-3 fa-solid fa-user"/>
            </div>
        
        </div>

        
    )
    return content;




}

export default Navbar