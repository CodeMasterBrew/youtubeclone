import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function useCommentResult(videoID) {
    const [comments, setComments] = useState("");
    const getComments = async () => {
        const API_KEY = 'AIzaSyBCcokqxqY4_wNYZ_kAXcgrBX1yqWI8-NQ'
        const videos = await axios('https://youtube.googleapis.com/youtube/v3/commentThreads', {
            params: {
                part: 'snippet',
                videoId: videoID,
                key: API_KEY
            },
            header: {
                Authorization: `Bearer ${API_KEY}`,
                Accept: 'application/json'
            }
        })
        setComments(videos.data);
    }
    useEffect(() => {
        getComments();
    }, []);
    return comments;
}