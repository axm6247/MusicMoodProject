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
import youtube from '../api/youtube'
// import YoutubeMusicApi from "youtube-music-api";
// import '../css/style.css';
// import gapi from "../api/api";

// import useScript from 'hooks/useScript';




// gapi.load("client:auth2", function() {
//   gapi.auth2.init({client_id: "YOUR_CLIENT_ID"});
// });


// const MyComponent = props => {
//   // useScript('https://apis.google.com/js/api.js');
//   // gapi.client.setApiKey("AIzaSyApGtA1xk7mrU6rPqerFvfe6_rIGgj6Fs8");
//   // gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
//   //     .then(function() { console.log("GAPI client loaded for API"); },
//   //           function(err) { console.error("Error loading GAPI client for API", err); });

//   // gapi.client.youtube.channels.list({
//   //               "part": [
//   //                 "snippet,contentDetails,statistics"
//   //               ],
//   //               "forUsername": "nigahiga"
//   //             })
//   //                 .then(function(response) {
//   //                         // Handle the results here (response.result has the parsed body).
//   //                         console.log("Response", response);
//   //                       },
//   //                       function(err) { console.error("Execute error", err); });
          





//   // rest of your component
// }



export default function () {
  // Prevent page reload, clear input, set URL and push history on submit

  const [controlsToggle, setControlsToggle] = useContext(Context);

  // const onSearch = async keyword => {
  //   const response = await youtube.get("/search", {
  //     params: {
  //       q: keyword
  //     }
  //   });
  //   this.setState({
  //     videosMetaInfo: response.data.items,
  //     selectedVideoId: response.data.items[0].id.videoId
  //   });
  //   console.log(this.state);
  // };

  // onSearch("Banking With Life")
  

  // setControlsToggle("false")
  // loadClient();
  // execute();
  return(  
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



