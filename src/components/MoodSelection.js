
import React, { Component , useContext} from "react";
import { HashRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from "react-player";
import { Context } from '../context/Provider'




export default function () {
  // Prevent page reload, clear input, set URL and push history on submit
  const [controlsToggle, setControlsToggle] = useContext(Context);

  return (


    <Container>
      <Form>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Label><b><i>Music Genre Preference:</i></b></Form.Label>
          <Form.Check type="checkbox" label="Country" />
          <Form.Check type="checkbox" label="Rap" />
          <Form.Check type="checkbox" label="Alternative" />
          <Form.Check type="checkbox" label="Pop" />
          <Form.Check type="checkbox" label="Classical" />
        </Form.Group>

        <Form.Group>

          <Form.Control as="select">
            <option>Select Mood</option>
            <option >Happy</option>
            <option>Sad</option>
            <option>Spiritual</option>
            <option>Hyped</option>
            <option>Determined</option>
          </Form.Control>

        </Form.Group>
        <br />
        <Link to={{pathname : "/youtubeplayer"}} onClick={() => setControlsToggle(true)} variant="danger" type="submit">
        <Button variant="danger">Find Me a Song!</Button>
  </Link>
      </Form>
      <br />

    </Container>


  );

}