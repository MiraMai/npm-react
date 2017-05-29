import React, { Component } from 'react';


class Form extends Component {
  constructor(props) {
      super(props);
    
      this.saveName= this.saveName.bind(this);
      this.saveEmail= this.saveEmail.bind(this);
  }
  render() {
    return (
        <div>
            <input onChange={this.saveName} placeholder="name" />
            <input onChange={this.saveEmail} placeholder="email" />
        </div>
      
    );
  }
    saveName (event) {
        let name= event.target.value;
        this.setState ({
            name: name
        });
         console.log(name);

    }
     saveEmail (event) {
        let email= event.target.value;
        this.setState ({
            email: email
        });
         console.log(email);
    }
}

export default Form;
