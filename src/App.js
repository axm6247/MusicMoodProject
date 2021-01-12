import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from "react-player";
import YoutubePlayer from './components/YoutubePlayer'
import MoodSelection from './components/MoodSelection'


const Main = props => (

  <Switch>
    <Route exact path="/"><MoodSelection /></Route>
    <Route exact path="/youtubeplayer"><YoutubePlayer /></Route>
  </Switch>

);

class App extends Component {
  // Prevent page reload, clear input, set URL and push history on submit
  render() {
    return (



      <BrowserRouter>
        <Container>
          <Route component={Main} />
        </Container>
      </BrowserRouter>





    );

  }
}

export default App

