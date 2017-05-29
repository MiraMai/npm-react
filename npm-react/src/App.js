import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './form';

class App extends Component {
     constructor(props) {
      super(props);
         this.state= {
             name: "",
             email: ""
         }
         this.saveName= this.saveName.bind(this);
      this.saveEmail= this.saveEmail.bind(this);
     }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Form saveName={this.saveName}
              saveEmail={this.saveEmail} />
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

export default App;
