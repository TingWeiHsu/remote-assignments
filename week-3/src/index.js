import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App'


class Index extends React.Component { 
    
    render(){
      return(
          <App />
      )
    }
}


ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
