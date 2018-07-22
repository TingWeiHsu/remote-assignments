import React from 'react'
import './style.css'

export class Banner extends React.Component {
    handleClick () {
      document.getElementById("click").innerHTML="<h1>Hava a good time!</h1>";   
    }
    
    render() {
        return (
            <div id="click" className="banner" onClick={this.handleClick}>
               <h1  className="headline" >Welcom Message</h1>
       
           </div>)
    } 
}