import React, { Component, useContext } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from "react-player";
import { Context } from '../context/Provider'



export default function () {
  // Prevent page reload, clear input, set URL and push history on submit

  const [controlsToggle, setControlsToggle] = useContext(Context);
  // setControlsToggle("false")
  

  return (

    <ReactPlayer
      controls={controlsToggle}
      url="https://www.youtube.com/watch?v=ug50zmP9I7s"
    />



  );
}



