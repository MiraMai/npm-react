import React, { Component } from 'react';
import './App.css';


class Form extends Component {
  constructor(props) {
      super(props);
    
      
  }
  render() {
    return (
        <div>
            <input className="name" onChange={this.props.saveName} placeholder="name" />
            <input className="email" onChange={this.props.saveEmail} placeholder="email" />
        </div>
      
    );
  }
    
}

export default Form;
