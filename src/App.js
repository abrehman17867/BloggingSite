
import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Foter from './components/Foter';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Writer from './components/Writer';
import Login from './components/Login';
import Aboutus from './components/Aboutus';
import TermCondition from './components/TermCondition';
import Disclaimer from './components/Disclaimer';
import Scroller from './components/Scroller';
import Sign2 from './components/Sign2';
import Setpass from './components/Setpass';
import Error from './components/Error';

import { BrowserRouter } from "react-router-dom";
import {
  Routes,
  Route
} from "react-router-dom";


class App extends React.Component {
  
  // function App() {
  render() {
    return (
      <>
        <BrowserRouter>
          <Scroller />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/Writer" element={<Writer />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/Aboutus" element={<Aboutus />} />
            <Route exact path="/TermCondition" element={<TermCondition />} />
            <Route exact path="/Disclaimer" element={<Disclaimer />} />
            <Route exact path="/Sign2" element={<Sign2 />} />
            <Route exact path="/Setpass" element={<Setpass />} />
            <Route exact path="/Error" element={<Error />} />
          </Routes>
          <Foter />
        </BrowserRouter>
      </>
    );

  }
};

export default App;
