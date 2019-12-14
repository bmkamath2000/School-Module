import React from 'react';
import axios from 'axios';
import qs from 'qs';
import modify from '../img/modify.png';
import trash from '../img/trash.png';
import plus from '../img/plus.png';

class Body1 extends React.Component {
    constructor (props)
      {
          super(props);
    this.state = {
      takeclass: [],
      active:false
    }
    this.toggleClass1=this.toggleClass1.bind(this);
    this.addStudent=this.addStudent.bind(this);
    this.modifyStudent=this.modifyStudent.bind(this);
    this.deleteStudent=this.deleteStudent.bind(this);
    
  }
   /* getStudent() {
    var rollno = document.getElementById("t1").value;
    ;(async () => {
      const response = await axios({
        url: 'http://localhost/api/school/b.php?rollno='+rollno,
        method: 'get'
      })
    
      document.getElementById("t2").value = response.data.name;
    })()
    }
    */ 
    addStudent(e) {
      e.preventDefault();
      var name = document.getElementById('t0').value;
      
      ;(async () => {
        const response = await axios({
          url: 'http://localhost/api/school/b.php',
          method: 'post',
          data: qs.stringify({
            name: name
          }) 
      })
    
      alert(response.data.result);
    })()
    }
    
    modifyStudent(e,rollno) {
      e.preventDefault();
      var name = document.getElementById(rollno).value;
      ;(async () => {
        const response = await axios({
          url: 'http://localhost/api/school/b.php',
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
    
    
    deleteStudent(e,rollno) {
      e.preventDefault();
      ;(async () => {
        const response = await axios({
          url: 'http://localhost/api/school/b.php',
          method: 'delete',
          data: qs.stringify({
            rollno: rollno
          }) 
      })
    
      console.log(response);
      alert(response.data.result);
    })()
    }
    toggleClass1(e)
    {
      e.preventDefault();
      this.setState({active:!this.state.active});
    }
    componentDidMount() {
      
    const url = 'http://localhost/api/school/b.php?rollno='
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ takeclass: data })
      console.log(this.state.takeclass);
     })
     }
    render() {
      return (
          <React.Fragment>
          <h1>Attendance</h1>
         <table border='1' width='100%' >
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Register Number</th>
              <th>Operate</th>
            </tr>
          </thead>
          {this.state.takeclass.map((record1) => (
          <tr>
              <td><textarea id={ record1.ROLLNO }>{ record1.NAME }</textarea></td>
              <td>{ record1.ROLLNO }</td>
              <td>
              <button onClick={(e)=>this.modifyStudent(e,record1.ROLLNO)}><img src={modify} height="20" width="20"></img></button>
              <button onClick={(e)=>this.deleteStudent(e,record1.ROLLNO)}><img src={trash} height="20" width="20"></img></button>
              </td>
          </tr>
          ))}
          <tr><td colspan="3"><button onClick={(e)=>{this.toggleClass1(e);}}>{this.state.active?'Post':'Add Student'}</button></td></tr>
          <tr className={!this.state.active&&"invisible"}>
            <td>
            <textarea id="t0" width="100"/>
            </td>
            <td>
            xxx
            </td>
            <td>
            <button onClick={(e)=>this.addStudent(e)}><img src={plus} width="20" height="20"></img></button>
            </td>
          </tr>
          </table> 
         
          </React.Fragment>
      );
    }
  }
  
  
  export default Body1;