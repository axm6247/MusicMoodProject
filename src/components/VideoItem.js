import React from 'react';
import '../style/video.css';


const VideoItem = ({video , handleVideoSelect}) => {
    console.log(video.id.videoId)
    return (
        <div>
        <div onClick={ () => handleVideoSelect(video)} className=' video-item item'>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            
            <div className='content'>
                <div className='header '>{video.snippet.title}</div>
            </div>
        </div>
        <br/>
        
        <br/>
        </div>
    )
};
export default VideoItem;