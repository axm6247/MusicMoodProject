import React from 'react';
import ReactPlayer from "react-player";
import Button from 'react-bootstrap/Button';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div><br/>Video search results will appear here ...<br/></div>;
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
<Button variant="danger">Add to Playlist Card</Button>
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>

        </div>

    )
}

export default VideoDetail;