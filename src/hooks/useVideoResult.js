import axios from "axios";
import React, { useEffect, useState } from "react";

export default () => {
    const [result, setResult] = useState('');
    const getVideos = async () => {
        const API_KEY = 'AIzaSyBCcokqxqY4_wNYZ_kAXcgrBX1yqWI8-NQ'
        const videos = await axios('https://youtube.googleapis.com/youtube/v3/videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 50,
                key: API_KEY
            },
            header: {
                Authorization: `Bearer ${API_KEY}`,
                Accept: 'application/json'
            }
        })
        setResult(videos.data);
}
useEffect(() => {
    getVideos()
}, []);
return result;
}