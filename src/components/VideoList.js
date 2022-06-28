import React from 'react';
import { useNavigate } from "react-router-dom";

const VideoList = (props) => {
    let navigate = useNavigate();
    function redirectToPlayVideo(event){
        navigate('/playvideo', { 
            state: {vid: event.currentTarget.id}
        });
    }

    return (
        <>
            {props.data.items?.map(key => {
                return (
                    <div key={key.id} id={key.id} onClick ={(event) => redirectToPlayVideo(event)} className='card-view'>
                        <img
                            className="card-image"
                            src={key.snippet.thumbnails.medium.url}
                            height={key.snippet.thumbnails.medium.height}
                            width='100%'
                            alt=""
                        />
                        <div className="content">
                            <h4 className="title">
                                {key.snippet.title}
                            </h4>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default VideoList;