
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




export default function () {
  // Prevent page reload, clear input, set URL and push history on submit
  const [controlsToggle, setControlsToggle] = useContext(Context);

  return (


    <Container>
      <Row>
        {/* <
        Col lg={1}></Col> */}
      <Col lg={11}>
      <Accordion>
        
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      <Button variant="outline-dark" size = "lg">Life Hacks Tutorials</Button>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body> 
        <Row><Col lg={5}>
        <ReactPlayer
      controls={true}
      height={240}
      width={426}
      url="https://www.youtube.com/watch?v=Dp7mGfP4TOI"
    /></Col><Col lg={1}></Col> <Col lg={5}>
    <ReactPlayer
  controls={true}
  height={240}
  width={426}
  url="https://www.youtube.com/watch?v=oBHTqoR0-8M"
/></Col></Row>
    <br/>
    <Row><Col lg={5}>
        <ReactPlayer
      controls={true}
      height={240}
      width={426}
      url="https://www.youtube.com/watch?v=r3iSRAcqI6Q"
    /></Col><Col lg={1}></Col> <Col lg={5}>
    <ReactPlayer
  controls={true}
  height={240}
  width={426}
  url="https://www.youtube.com/watch?v=Pt7QNgq3P78"
/></Col></Row>
     </Card.Body>

    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      <Button variant="outline-dark" size = "lg">Music Video Playlist</Button>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body> 
        <Row><Col lg={5}>
        <ReactPlayer
      controls={true}
      height={240}
      width={426}
      url="https://www.youtube.com/watch?v=m7Bc3pLyij0"
    /></Col><Col lg={1}></Col> <Col lg={5}>
    <ReactPlayer
  controls={true}
  height={240}
  width={426}
  url="https://www.youtube.com/watch?v=VF-r5TtlT9w"
/></Col></Row>
    <br/>
    <Row><Col lg={5}>
        <ReactPlayer
      controls={true}
      height={240}
      width={426}
      url="https://www.youtube.com/watch?v=XXYlFuWEuKI"
    /></Col><Col lg={1}></Col> <Col lg={5}>
    <ReactPlayer
  controls={true}
  height={240}
  width={426}
  url="https://www.youtube.com/watch?v=xpVfcZ0ZcFM"
/></Col></Row>
     </Card.Body>

    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
      <Button variant="outline-dark" size = "lg">Politics</Button>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body> 
        <Row><Col lg={5}>
        <ReactPlayer
      controls={true}
      height={240}
      width={426}
      url="https://www.youtube.com/watch?v=OXKYPb3GChQ"
    /></Col><Col lg={1}></Col> <Col lg={5}>
    <ReactPlayer
  controls={true}
  height={240}
  width={426}
  url="https://www.youtube.com/watch?v=yUQFimV6ifQ"
/></Col></Row>
    <br/>
    <Row><Col lg={5}>
        <ReactPlayer
      controls={true}
      height={240}
      width={426}
      url="https://www.youtube.com/watch?v=0lgCOaqH9Ag"
    /></Col><Col lg={1}></Col> <Col lg={5}>
    <ReactPlayer
  controls={true}
  height={240}
  width={426}
  url="https://www.youtube.com/watch?v=Wf_WAZom8C8"
/></Col></Row>
     </Card.Body>

    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
      <Button variant="outline-dark" size = "lg">March Madness Playlist</Button>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body> 
        <Row><Col lg={5}>
        <ReactPlayer
      controls={true}
      height={240}
      width={426}
      url="https://www.youtube.com/watch?v=djHhgaE6VBk"
    /></Col><Col lg={1}></Col> <Col lg={5}>
    <ReactPlayer
  controls={true}
  height={240}
  width={426}
  url="https://www.youtube.com/watch?v=2FOL6SM_O2Y"
/></Col></Row>
    <br/>
    <Row><Col lg={5}>
        <ReactPlayer
      controls={true}
      height={240}
      width={426}
      url="https://www.youtube.com/watch?v=3D8zc5uOfOw"
    /></Col><Col lg={1}></Col> <Col lg={5}>
    <ReactPlayer
  controls={true}
  height={240}
  width={426}
  url="https://www.youtube.com/watch?v=EGkECJJdEQM"
/></Col></Row>
     </Card.Body>

    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="4">
      <Button variant="outline-dark" size = "lg">Recommended Today</Button>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="4">
      <Card.Body><Row><Col lg={5}>
    <ReactPlayer
  controls={true}
  height={240}
  width={426}
  url="https://www.youtube.com/watch?v=WdIfjzreRnM"
/></Col><Col lg={1}></Col> <Col lg={5}>
<ReactPlayer
controls={true}
height={240}
width={426}
url="https://www.youtube.com/watch?v=DF7gpzLUbiI"
/></Col></Row><br/><Row><Col lg={5}>
    <ReactPlayer
  controls={true}
  height={240}
  width={426}
  url="https://www.youtube.com/watch?v=M31zUWHiXlA"
/></Col><Col lg={1}></Col> <Col lg={5}>
<ReactPlayer
controls={true}
height={240}
width={426}
url="https://www.youtube.com/watch?v=FWFb-8hFutY"
/></Col></Row>
    </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
</Col>
</Row>
      {/* <Form>

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
      <br /> */}

    </Container>


  );

}