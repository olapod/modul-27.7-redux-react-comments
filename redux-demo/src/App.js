import React from 'react';
import './App.css';
import CommentsList from './CommentsListContainer';
import CommentForm from './CommentForm'
// import './Comment.css';

const App = () => {
  return (
    <div className="App">
      <CommentForm/><br/>
      <h4>List of comments:</h4>
      <CommentsList/>
    </div>
  );
};

export default App;
