import React, { Component } from 'react';
import { BrowserRouter, Route, Link , Switch,Router} from 'react-router-dom';


import logo from './logo.svg';

import icon2 from './icon2.png';

import CustomerView from './Components/CustomerView';

import FreelancerView from './Components/FreelancerView';

import NavBar from './Components/Navbar';

import './App.css';

class Login extends Component {
    state = {
        response: '',
        post: '',
        login: '',
        password: '',
        responseToPost: '',
    };

    componentDidMount() {

    }

    handleSubmit = async e => {
//TODO handle submit login
    };



    render() {
        return (

            <div className="Login">
                <div className="Login-bg">
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    <img src={icon2} className="App-icon" alt="logo" />
                    <p className="logolabel">
                        I-CAR™
                    </p>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <strong>S'identifier :</strong>
                    </p>
                    <input className="Login-input"
                        type="login"
                        value={this.state.login}
                        onChange={e => this.setState({ login: e.target.value })}
                    />
                    <p>
                    <input
                        className="Login-input"
                        type="password"
                        value={this.state.password}
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                    </p>
                    <p>
                    <button type="submit">Submit</button>
                    </p>
                </form>
                </div>
            </div>
        );
    }
}

export default Login;
