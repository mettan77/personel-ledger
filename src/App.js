import React, {Component} from 'react';
import FetchRandomUser from "./components/FetchRandomUser";
import './App.css';

class App extends Component {
  
  state = {
    visible: true
  };

  render() {
    return ( 
    <div className="App">
    <FetchRandomUser />

    </div>
    );
  }
}

export default App;