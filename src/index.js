import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import { BrowserRouter } from "react-router-dom";



// ReactDOM.render(
// <Navbar fixed = "top" bg="danger" expand="lg" variant="dark" text-align="center">
//   <Navbar.Brand href="#home" text-align="center">Music Mood</Navbar.Brand>
//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//   <Navbar.Collapse id="basic-navbar-nav">
//   </Navbar.Collapse>
// </Navbar>, document.getElementById('navbar'))

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
