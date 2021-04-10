
import React, { Component , useContext, useState} from "react";
import { HashRouter, Route, Switch, Redirect, Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from "react-player";
import { Context, Context3 } from '../context/Provider'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Modal from 'react-bootstrap/Modal'

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
         Add to Existing Playlist Card
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4> */}
        <p>
        <Form.Control as="select">
            <option>Life Hacks Tutorial</option>
            <option >Music Video Playlist</option>
            <option>Politics</option>
            <option>March Madness Playlist</option>
          </Form.Control>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant = "danger" onClick={props.onHide}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function () {
  // Prevent page reload, clear input, set URL and push history on submit
  const [controlsToggle, setControlsToggle] = useContext(Context);
  // const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
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
    <Button variant="danger" onClick={() => setModalShow(true)}>
       Add to Playlist Card
      </Button>
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
        <Button variant="danger" onClick={() => setModalShow(true)}>
       Add to Playlist Card
      </Button>
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
    <Button variant="danger" onClick={() => setModalShow(true)}>
       Add to Playlist Card
      </Button>
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
    <Button variant="danger" onClick={() => setModalShow(true)}>
       Add to Playlist Card
      </Button>
  </Card.Body>
      </Card>
      
      
    
      
      </Row>
     

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
       */}
    </Container>


  );

}