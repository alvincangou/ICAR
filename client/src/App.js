import React, { Component } from 'react';
import { BrowserRouter, Route, Link , Switch,Router} from 'react-router-dom';


import logo from './logo.svg';

import CustomerView from './Components/CustomerView';

import FreelancerView from './Components/FreelancerView';

import NavBar from './Components/Navbar';

import './App.css';

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}

          <p>
            ICAR
          </p>


          {/*<a*/}
          {/*  className="App-link"*/}
          {/*  href="https://reactjs.org"*/}
          {/*  target="_blank"*/}
          {/*  rel="noopener noreferrer"*/}
          {/*>*/}
          {/*  Learn React*/}
          {/*</a>*/}
        </header>

        <BrowserRouter>
          <NavBar/>

          {/*<NavLink to="/customer">Customer</NavLink>*/}

          {/*<NavLink to="/freelancer">Freelancer</NavLink>*/}


          <div className="sans-serif">
            <Switch>
              <Route exact path="/" component={CustomerView}/>
              <Route path="/customer" component={CustomerView} />
              <Route path="/freelancer" component={FreelancerView} />
            </Switch>
          </div>
        </BrowserRouter>

        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

export default App;
