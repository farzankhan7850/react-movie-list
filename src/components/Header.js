import React, { useState } from "react";
import './Header.css';
import logo from "../images/logo.png";



function Header(props) {

   
    return (
        <div>
            <div>
                <img src={logo} alt="logo"></img>
                <h2 className='text-bold fs-1 fw-bolder'>goodmovies</h2>
                <div className="mt-3 mb-3">Checkout my favourite movies. Select a genre to get started</div>
            </div>
            <div className='ml-0 mt-3 mb-3'>
            
                {Object.keys(props.dB).map((e)=>(
                      <button key={e} className='btn text-light m-1' onClick={()=>props.setCategory(e)}>{e}</button>
                    ))}

            </div>
             <hr></hr>
        </div>
    );

}

export default Header;