import React from 'react';

import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
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
      <Header/>
      <div className="partition-div">
      <div className="sidebar-container">
      <Sidebar/>
      </div>
      <Body1/>
      </div>
      <Footer/>
    </div>
  );
}
}
export default App;
