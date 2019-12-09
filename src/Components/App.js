import React from 'react';

import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Body1 from './Components/Body1';
import Footer from './Components/Footer';
import axios from 'axios';
import qs from 'qs';

function getStudent() {
var rollno = document.getElementById("t1").value;
;(async () => {
  const response = await axios({
    url: 'http://localhost/b.php?rollno='+rollno,
    method: 'get'
  })

  document.getElementById("t2").value = response.data.name;
})()
}

function addStudent() {
  var name = document.getElementById('t0').value;
  ;(async () => {
    const response = await axios({
      url: 'http://localhost/b.php',
      method: 'post',
      data: qs.stringify({
        name: name
      }) 
  })

  alert(response.data.result);
})()
}

function modifyStudent() {
  var rollno = document.getElementById('t1').value;
  var name = document.getElementById('t2').value;
  ;(async () => {
    const response = await axios({
      url: 'http://localhost/b.php',
      method: 'put',
      data: qs.stringify({
        rollno: rollno,
        name: name
      }) 
  })

  console.log(response);
  alert(response.data.result);
})()
}


function deleteStudent() {
  var rollno = document.getElementById('t1').value;
  ;(async () => {
    const response = await axios({
      url: 'http://localhost/b.php',
      method: 'delete',
      data: qs.stringify({
        rollno: rollno
      }) 
  })

  console.log(response);
  alert(response.data.result);
})()
}


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
      <div>
      <textarea id="t0" width="100"/>
      <button onClick={addStudent}>Add Student</button>
      </div>
      <div>
      <textarea id="t1" width="100"/>
      <textarea id="t2" width="100"/>
      </div>
      <button onClick={getStudent}>Get Student</button><br/>
      <button onClick={modifyStudent}>Modify Student</button><br/>
      <button onClick={deleteStudent}>Delete Student</button>
      <Footer/>
    </div>
  );
}
}
export default App;
