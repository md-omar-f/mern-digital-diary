import logo from './logo.svg';
import './App.css';

//used components

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import NavBar from './components/Navbar.jsx';
import AddNote from './components/AddNote.jsx';
import AllNotes from './components/AllNotes.jsx';
import DigitalDiary from './components/DigitalDiary.jsx'
import EditNote from './components/EditNote';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<DigitalDiary />} />
          <Route path='/all' element={<AllNotes />} />
          <Route path='/add' element={<AddNote />} />
          <Route path='/edit/:id' element={<EditNote />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
