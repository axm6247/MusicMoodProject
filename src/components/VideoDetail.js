import React from 'react';
import ReactPlayer from "react-player";

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading ...<br/></div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    // console.log(typeof(video));
    return (
        <div>
            <div className='ui embed'>
                <ReactPlayer
                    controls={"true"}
                    url={videoSrc}
                />

            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetail;