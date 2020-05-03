import React, { Component } from 'react';
import { BrowserRouter, Route, Link , Switch,Router} from 'react-router-dom';



import Login from './Login';

import Home from './Home';

import NavBar from './Components/Navbar';

import './App.css';


class App extends Component {


  render() {
    return (

        <BrowserRouter>

            <Switch>
              <Route path="/home" component={Home}/>
              <Route path="/login" component={Login} />
            </Switch>

        </BrowserRouter>


    );
  }
}



export default App;
