import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent'; //app component becomes the parent of the menu component
//we can  make available the ste of children to parent as props do that they can be available to all the children
import {BrowserRouter } from 'react-router-dom';
class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <div className="App">
      <Main />
      </div>
      </BrowserRouter>
     
    );
  }
}

export default App;
// dishes in Menu are props