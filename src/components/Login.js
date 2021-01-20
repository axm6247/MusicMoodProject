import React, { Component, useContext } from "react";
import { HashRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from "react-player";
import { Context } from '../context/Provider'
// import '../css/style.css';



export default function () {
  // Prevent page reload, clear input, set URL and push history on submit

  const [controlsToggle, setControlsToggle] = useContext(Context);
  // setControlsToggle("false")


  return (
    <InputGroup>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="username"
          aria-label="username"
          aria-describedby="basic-addon2"
        />
        <br />

        {/* <InputGroup.Append>
        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
      </InputGroup.Append> */}
      </InputGroup>
      <InputGroup>
        <FormControl
          placeholder="password"
          aria-label="password"
          type="password"
          aria-describedby="basic-addon2"
        /></InputGroup>
        <br />
        <br />
        <Link to={{pathname : "/"}} variant="danger" type="submit">
        <Button variant="danger">Login</Button>
        </Link>
    </InputGroup>




  );
}



