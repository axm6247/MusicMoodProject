import React from 'react';
import ReactPlayer from "react-player";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

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

const VideoDetail = ({ video }) => {
    const [modalShow, setModalShow] = React.useState(false);

    if (!video) {
        return <div><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>Video search results will appear here ...</i><br/></div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    // console.log(typeof(video));
    return (
        <div>
            <br/>
            <div className='ui embed'>
                <ReactPlayer
                    controls={"true"}
                    url={videoSrc}
                />
<br></br>

<MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
<Button variant="danger" onClick={() => setModalShow(true)}>Add to Playlist Card</Button>
 <br/>
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>

        </div>

    )
    
}

export default VideoDetail;