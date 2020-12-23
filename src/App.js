import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  // Prevent page reload, clear input, set URL and push history on submit
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  render() {
    return (


      <Container>
        <Form>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Label>Music Genre Preference:</Form.Label>
            <Form.Check type="checkbox" label="Country" />
            <Form.Check type="checkbox" label="Rap" />
            <Form.Check type="checkbox" label="Alternative" />
            <Form.Check type="checkbox" label="Pop" />
            <Form.Check type="checkbox" label="Classical" />
          </Form.Group>

          <Form.Group>

            <Form.Control as="select">
              <option>Select Mood</option>
              <option>Happy</option>
              <option>Sad</option>
              <option>Spiritual</option>
              <option>Hyped</option>
              <option>Determined</option>
            </Form.Control>

          </Form.Group>
          <br />
          <Button variant="danger" type="submit">
            Find Me a Song!
            </Button>
        </Form>
      </Container>


    );
  }
}

export default App;
