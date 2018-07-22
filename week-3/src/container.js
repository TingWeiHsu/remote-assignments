import React from 'react'
import './style.css'


export class Container extends React.Component {
    handleClick() {
        const x = document.getElementById("hidden");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
    
    render () {
        return (
            <div>
            <div className="container clearfix">
      
            <h2>Section title</h2>
            
            <div className="primary col">
              <h3>Content box1</h3>
            </div>
            
            <div className="secondary col">
              <h3>Content box2</h3>
            </div>
            
            <div className="tertiary col">
              <h3>Content box3</h3>
            </div>
            
            <div className="fourth col">
              <h3>Content box4</h3>
            </div>
            
            <button onClick={this.handleClick} className="button" >Call to action!</button>
       
            
            
        </div> 
          
            <div id="hidden" className="container clearfix">
            
            <h2> </h2>
            
            <div className="primary col">
              <h3>Content box1</h3>
            </div>
            
            <div className="secondary col">
              <h3>Content box2</h3>
            </div>
            
            <div className="tertiary col">
              <h3>Content box3</h3>
            </div>
            
            <div className="fourth col">
              <h3>Content box4</h3>
            </div>
            
        </div> 
        </div>
        )
    }

}