import React from 'react';
import './App.css';
import CommentsList from './CommentsListContainer';
// import './Comment.css';

const App = () => {
  return (
    <div className="App">
      Tu będzie lista komentarzy!
      <CommentsList/>
    </div>
  );
};

export default App;
