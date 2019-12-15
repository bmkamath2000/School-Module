import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Body1 from './Components/Body1';
import Footer from './Components/Footer';
class App extends React.Component {
 constructor(props)
 {
   super(props);
 }
 render()
 {
  return (
    <div >
      <Router>
      <Header/>
      <div className="partition-div">
      <div className="sidebar-container">
      <div className="sidebar">
      
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        
      </div>
    
      </div>
      </div>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Body1 />
          </Route>
        </Switch>
      </div>
      <Footer/>
      </Router>
    </div>
  );
}
}
export default App;
