import React from "react";

const CommentContainer = (props) => {
    return(
        <div className="comment-container">
            {props.children}
        </div>
    )
}

export default CommentContainer;