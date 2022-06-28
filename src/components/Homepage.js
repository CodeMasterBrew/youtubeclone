import React from "react";
import useVideoResult from "../hooks/useVideoResult";
import VideoList from "./VideoList";
import VideoListContainer from "./VideoListContainer";

const Homepage = () => {
    const VideosResponse = useVideoResult();
    return (
        <>
            <VideoListContainer>
                <VideoList data={VideosResponse} />
            </VideoListContainer>
        </>
    )
}

export default Homepage;