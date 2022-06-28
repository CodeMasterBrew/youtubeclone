import React from "react";

const Comments = (props) => {
    return (
        <>
            {props.data.items?.map(key => {
                return (
                    <div key={key.id}  className='comments'>
                        <h4 className="comment-author">{key.snippet.topLevelComment.snippet.authorDisplayName}</h4>
                        <p>{key.snippet.topLevelComment.snippet.textDisplay}</p>
                    </div>
                )
            })

            }
        </>

    );
}

export default Comments;