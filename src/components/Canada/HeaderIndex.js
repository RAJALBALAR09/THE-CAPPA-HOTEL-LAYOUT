import './StyleCnd.css';
import Home from './HomeIndex.js';
import About from './AboutIndex.js';
import Footer from './FooterIndex.js';
import Parallax from './ParallaxIndex.js';
import Gallary  from './GallaryIndex.js';
import Contact from './ContactIndex.js';

import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, Link } from "react-router-dom";

// .................. BOOTSTREP FILES ..............
import { Navbar, Container, Nav } from 'react-bootstrap';

// .................. LOGO FILES ..............
import logo from './Img/asset 0.png';

function Header() {
    return (
        <>

           
            <Navbar expand="lg" className="bg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} className='logo'></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#link">  <Link to="/" > Home </Link></Nav.Link>
                            <Nav.Link href="#link">  <Link to="/About" > About </Link></Nav.Link>
                            <Nav.Link href="#link">  <Link to="/gallary" > Gallary </Link></Nav.Link>
                            <Nav.Link href="#link">  <Link to="/link" > Parallax </Link></Nav.Link>
                            <Nav.Link href="#link">  <Link to="/Contect" > Contect </Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>    
            </Navbar>

            
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/gallary" element={<Gallary />} />
                    <Route path="/link" element={<Parallax />} />
                    <Route path="/Contect" element={<Contact/>} />

                </Routes>
            </div>
            {/* <Footer/> */}

        </>
    )
}
export default Header;