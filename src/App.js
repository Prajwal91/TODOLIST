

import './App.css';
import image from './images/my.jpg'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Form from './components/Form.js';
import ToDoList from './ToDoList';



function About() {
  return (
    <div >MY NAME IS RAJU
    </div>
  );
}
function Contact() {
  return (
    <div><h1>MY NAME IS PRAJU</h1>

    </div>
  );
}
function Team() {
  return (
    <div >
      <h2 align="center">TEAMS</h2>
      <table align="center">
        <th>
          <tr>TEAM1
            <td>TEAM2</td>
            <td>TEAM3</td>
          </tr>

          <tr>
            <td>RAJU</td>
            <td>SALMAN</td>
            <td>PRAJU</td>
          </tr>
        </th>

      </table>
    </div>
  );
}
function NavBar() {
  return (<div>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/contact'>Contact</Link>
    <Link to='/team'>Team</Link>
    <Link to='/add-students'>Form</Link>
    <Link to='/ToDoList'>TO DO LIST</Link>
   

  
  </div>

  )
}

function Home() {
  return (
    <div>Home</div>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/team' element={<Team />} />
          <Route path='/add-students' element={<Form />} />
          <Route path='/ToDoList' element={<ToDoList />} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;



