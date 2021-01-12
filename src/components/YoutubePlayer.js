import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from "react-player";


export default function () {
  // Prevent page reload, clear input, set URL and push history on submit

  return (


      <ReactPlayer
        controls={true}
        url="https://www.youtube.com/watch?v=ug50zmP9I7s"
      />



  );

}


