import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Feeling from '../Feeling/Feeling.jsx'
import Understanding from '../Understanding/Understanding.jsx';
import Support from '../Support/Support.jsx';
import Comments from '../Comments/Comments.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
          <Feeling/>
        </header>
        <br/>
        <Router>
          <nav>
            <ul>
              <li><Link to="/Feeling">Feeling</Link></li>
              <li><Link to="/Understanding">Understanding</Link></li>
              <li><Link to="/Support">Support</Link></li>
              <li><Link to="/Comments">Comments</Link></li>

            </ul>
          </nav>
          <Route exact path="/Feeling" component={Feeling} />
          <Route exact path="/Understanding" component={Understanding} />
          <Route exact path="/Support" component={Support} />
          <Route exact path="/Comments" component={Comments} />


        </Router>
      </div>
    );
  }
}

export default App;
