import React from 'react';
import { useLocation } from "react-router-dom";
import useCommentResult from '../hooks/useCommentResult';
import CommentContainer from './CommentContainer';
import Comments from './Comments';

const PlayVideo = (props) => {
    const location = useLocation();
    const comments = useCommentResult(location.state.vid);
    const URL = `https://www.youtube.com/embed/${location.state.vid}?autoplay=1`
    return (
        <>
            <CommentContainer>
                <iframe width="640" height="360" src={URL} allow='autoplay' allowFullScreen="allowFullScreen">
                </iframe>
                <Comments data={comments} />
            </CommentContainer>
        </>
    )
}

export default PlayVideo;