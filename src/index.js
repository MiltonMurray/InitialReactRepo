import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = ()=>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 5pm" 
                    content="Look up in the sky, its a bird, its a plane!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Today at 2am"
                    content="Nice blog post!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Peter" 
                    timeAgo="Yesterday at 2:30pm"
                    content="Way to go"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};


ReactDOM.render(<App />, document.querySelector('#root'));

=======
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
>>>>>>> 02f3dd9a674bc0ae2eb8812641dd464b314ddfb2
