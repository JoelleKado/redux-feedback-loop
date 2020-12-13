import React, { Component } from 'react';
//import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Admin from '../Admin/Admin'
import Feeling from '../Feeling/Feeling.jsx'
import Understanding from '../Understanding/Understanding.jsx';
import Support from '../Support/Support.jsx';
import Comments from '../Comments/Comments.jsx';
import Review from '../Review/Review.jsx';


class App extends Component {

  componentDidMount() {
  //   this.getHistory();
   }

  // getHistory = () => {
  //   // tell axios to make a get call, then dispatch the array results
  //   axios.get ('/history').then( (response) => {
  //     console.log (`GET Response:`, response.data);
  //     // dispatch Array results
  //     this.props.dispatch ({type: 'GOT_HISTORY', payload: response.data })

  //   }).catch ( (err ) => {
  //     console.log (`Error in Get`, err);
  //   })
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
          REDUX STATE: {JSON.stringify(this.props.reduxState)}

          {/* <Admin/> */}
          {/* <Feeling/> */}
        </header>
        <br/>
        <Router>
          <nav>
            <ul>
              <li><Link to="/Feeling">HOME</Link></li>
              <li><Link to="/Understanding">Understanding</Link></li>
              <li><Link to="/Support">Support</Link></li>
              <li><Link to="/Comments">Comments</Link></li>
              <li><Link to="/Review">Review</Link></li>
              <li><Link to="/Admin">ADMIN</Link></li>
            </ul>
          </nav>
          <Route exact path="/Feeling" component={Feeling} />
          <Route exact path="/Understanding" component={Understanding} />
          <Route exact path="/Support" component={Support} />
          <Route exact path="/Comments" component={Comments} />
          <Route exact path="/Review" component={Review} />
          <Route exact path="/Admin" component={Admin} />
        </Router>
      </div>
    );
  }
}

//export default App;
const putReduxStateOnProps = (reduxState) => ({ reduxState })
export default connect(putReduxStateOnProps)(App);