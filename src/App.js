import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent'; //app component becomes the parent of the menu component
//we can  make available the ste of children to parent as props do that they can be available to all the children
import {BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'; // this provider component allows me to configure my React application so that the Redux Store becomes available to all components in my application. Also, I will import ConfigureStore, the
import{ConfigureStore} from './redux/configureStore';

const store=ConfigureStore();
class App extends Component{

  
  render(){
    return(
      <Provider store={store}>
      <BrowserRouter>
      <div className="App">
      <Main />
      </div>
      </BrowserRouter>
      </Provider>
     
    );
  }
}

export default App;
// dishes in Menu are props