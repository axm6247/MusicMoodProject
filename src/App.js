import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from "react-player";
import YoutubePlayer from './components/YoutubePlayer'
import MoodSelection from './components/MoodSelection'
import { Provider } from './context/Provider'


export default function () {
  // Prevent page reload, clear input, set URL and push history on submit

  return (
    <Provider>
      <BrowserRouter>
        <Container>
          <Switch>
            <Route exact path="/"><MoodSelection /></Route>
            <Route exact path="/youtubeplayer"><YoutubePlayer /></Route>
          </Switch>
        </Container>
      </BrowserRouter>
    </Provider>
  );


}



