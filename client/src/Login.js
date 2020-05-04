import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { BrowserRouter, Route, Link , Switch,Router} from 'react-router-dom';




import icon2 from './icon2.png';



import './App.css';

class Login extends Component {
    state = {
        response: '',
        post: '',
        login: '',
        password: '',
        redirect: null,
        responseToPost: '',
    };

    componentDidMount() {

    }

    handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ login: this.state.login, password: this.state.password }),
        });
        const body = await response.text();

        this.setState({ responseToPost: body });
        console.log(body);

        if (body){
            this.setState({ redirect: "/home" });
        }
    };



    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
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
