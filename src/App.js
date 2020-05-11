import React, { Component } from 'react';
import logo from './logo.svg';
import {Navbar,NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponents'; //app component becomes the parent of the menu component
//we can  make available the ste of children to parent as props do that they can be available to all the children
import {DISHES} from './shared/dishes';
class App extends Component{
    constructor(props)
    {
      super(props);
      
      this.state={
        dishes:DISHES
      };
    }  
  render(){
    return(
      <div >
        <Navbar dark color="primary">
        <div className="container">
        <NavbarBrand href="/">Restorante Con Fusion</NavbarBrand>
        </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
    </div>
    );
  }
}

export default App;
// dishes in Menu are props