import React from 'react';
import faker from 'faker';



const CommentDetail = ()=>{
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()}/>
            </a>

            <div className="content">
                <a href="/" className="author">
                    Sam
                </a>
                <div className="metadata">
                    <span className="date">today at 6pm</span>
                </div>
                <div className="text">nice comment</div>
            </div>
        </div>
    );
};

export default CommentDetail;