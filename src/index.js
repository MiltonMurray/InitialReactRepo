import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = ()=>{
    return (
        <div className="ui container comments">
            <CommentDetail 
                author="Sam" 
                timeAgo="Today at 5pm" 
                content="Look up in the sky, its a bird, its a plane!"
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Jane" 
                timeAgo="Today at 2am"
                content="Nice blog post!"
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Peter" 
                timeAgo="Yesterday at 2:30pm"
                content="Way to go"
                avatar={faker.image.avatar()}
            />
        </div>
    );
};


ReactDOM.render(<App />, document.querySelector('#root'));

