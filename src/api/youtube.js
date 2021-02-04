import axios from 'axios';
const KEY = 'AIzaSyApGtA1xk7mrU6rPqerFvfe6_rIGgj6Fs8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 15,
        key: KEY
    }
})