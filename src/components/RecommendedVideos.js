
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
  <Row><Col lg={1}></Col>
 <Card>
  {/* <Card.Header as="h5">Recommendations</Card.Header> */}
  <Card.Body>
  <ReactPlayer
          controls={true}
          height={240}
          width={426}
          url="https://www.youtube.com/watch?v=xpVfcZ0ZcFM"
    />
    <br/>
    <Button variant="danger">Add to Playlist Card</Button>
  </Card.Body>
  <br/>
  <br/>
</Card>
<Card>
      
      <Card.Body>
      <ReactPlayer
              controls={true}
              height={240}
              width={426}
              url="https://www.youtube.com/watch?v=xpVfcZ0ZcFM"
        />
        <br/>
        <Button variant="danger">Add to Playlist Card</Button>
      </Card.Body>
          </Card>
</Row><Row><Col lg={1}></Col>
      <Card>
      
  <Card.Body>
  <ReactPlayer
          controls={true}
          height={240}
          width={426}
          url="https://www.youtube.com/watch?v=xpVfcZ0ZcFM"
    />
    <br/>
    <Button variant="danger">Add to Playlist Card</Button>
  </Card.Body>
      </Card>
      
      <Card>
      
  <Card.Body>
  <ReactPlayer
          controls={true}
          height={240}
          width={426}
          url="https://www.youtube.com/watch?v=xpVfcZ0ZcFM"
    />
    <br/>
    <Button variant="danger">Add to Playlist Card</Button>
  </Card.Body>
      </Card>
      
      
    
      
      </Row>
      
    </Container>


  );

}