import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from "react-player";
import YoutubePlayer from './components/YoutubePlayer'
import MoodSelection from './components/MoodSelection'
import Navbar from 'react-bootstrap/Navbar';
import { Provider } from './context/Provider'
import SideBarExample from "./components/SideBarExample";
// import url('https://fonts.googleapis.com/css?family=Josefin+Sans');


export default function () {
  // Prevent page reload, clear input, set URL and push history on submit

  
  return (
    <Provider>
      <BrowserRouter>
        <Navbar fixed="top" bg="dark" expand="lg" variant="dark" text-align="center">
          <Navbar.Brand href="/"><p class="p1"><i><b>Music Mood</b></i></p></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <Switch>
            <Route exact path="/"><MoodSelection /></Route>
            <Route exact path="/youtubeplayer"><YoutubePlayer /></Route>
            <Route exact path="/sidebar"><SideBarExample/></Route>
          </Switch>
        </Container>
      </BrowserRouter>
    </Provider>
  );


}



