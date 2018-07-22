import React from 'react'
import './style.css'

export const Header = () => {
    return (
    <div className="main-header">
    <div className="container clearfix freeze">
      <h1 className="name"><a href="#">Website Title/Logo</a></h1>
        
         <input type="checkbox" className="checkbox" name="menu" value="mobiledropmenu" id="mobiledropmenu" />
         <label for="mobiledropmenu" className="label">☰</label>
        
         <div className="title">
        
           <ul className="main-nav">
           <li className="button1"><a href="#">item1</a></li>
           <li className="button1"><a href="#">item2</a></li>
           <li className="button1"><a href="#">item3</a></li>
           <li className="button1"><a href="#">item4</a></li>
           </ul>
       
         </div> 
        
        
    </div>
	</div>)
}