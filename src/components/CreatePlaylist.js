
import React, { Component , useContext, useState} from "react";
import { HashRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from "react-player";
import { Context, Context2 } from '../context/Provider'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import FormControl from 'react-bootstrap/FormControl'

import DatePicker from "react-datepicker";
import Modal from 'react-bootstrap/Modal'
import "react-datepicker/dist/react-datepicker.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Create Playlist Card
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4> */}
        <p>
        <Form.Control as="select">
            <option>Number of Videos to put in Playlist</option>
            <option >1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </p>
      </Modal.Body>
      <Modal.Footer>
         <Link to={{pathname : "/result"}} variant="danger" type="submit">
        <Button variant = "warning" onClick={props.onHide}>Create</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}


export default function () {
  // Prevent page reload, clear input, set URL and push history on submit
  const [controlsToggle, setControlsToggle] = useContext(Context);
  const [startDate, setStartDate] = useState(new Date());
  const [modalShow, setModalShow] = React.useState(false);
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
          <h4><Form.Label><b><u><i>Genres</i></u></b></Form.Label></h4>
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


      <br />
      
      <Row><Col lg={3}><DatePicker selected={startDate} onChange={date => setStartDate(date)} /> </Col> <Col sm={1}><h3><i>To</i></h3></Col> <DatePicker selected={startDate} onChange={date => setStartDate(date)} /></Row>
      </Form.Group>
        <br />
        {/* <Link to={{pathname : "/"}} onClick={() => setControlsToggle(true)} variant="danger" type="submit"> */}
        <Button variant="danger" onClick={() => setModalShow(true)}>Create Playlist Card</Button>
  {/* </Link> */}
      </Form>


      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>


  );

}