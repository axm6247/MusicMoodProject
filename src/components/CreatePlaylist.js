
import React, { Component , useContext} from "react";
import { HashRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from "react-player";
import { Context } from '../context/Provider'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import FormControl from 'react-bootstrap/FormControl'




export default function () {
  // Prevent page reload, clear input, set URL and push history on submit
  const [controlsToggle, setControlsToggle] = useContext(Context);

  return (


    <Container>
 
       <Form>

       <FormControl
        placeholder="Playlist Name"
        aria-label="username"
        aria-describedby="basic-addon2"
      />
      <br/>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Label><b><i>Genres:</i></b></Form.Label>
          <Form.Check type="checkbox" label="Music Videos" />
          <Form.Check type="checkbox" label="Sports" />
          <Form.Check type="checkbox" label="Technology" />
          <Form.Check type="checkbox" label="Science" />
          <Form.Check type="checkbox" label="Gaming" />
          <Form.Check type="checkbox" label="Financial" />
          <Form.Check type="checkbox" label="News" />
        </Form.Group>

        <Form.Group>

          <Form.Control as="select">
            <option>Select Video Length Preference</option>
            <option >0-5 minutes</option>
            <option>5-10 minutes</option>
            <option>10-30 minutes</option>
            <option>30-60 minutes</option>
            <option>Over 1 hour</option>
          </Form.Control>
<br/>

        </Form.Group>
        <br />
        <Link to={{pathname : "/youtubeplayer"}} onClick={() => setControlsToggle(true)} variant="danger" type="submit">
        <Button variant="danger">Create Playlist</Button>
  </Link>
      </Form>
      <br /> 

    </Container>


  );

}