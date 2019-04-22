import React from 'react';
import './Comment.css';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment}) =>
  <li className='comment'>
    <div className='commentText'>{text}</div> <span className='votes'>votes: {votes} </span> <br/>
    <button onClick={() => thumbUpComment(id)}>Thumb up</button>
    <button onClick={() => thumbDownComment(id)}>Thumb down</button>
    <button onClick={() => removeComment(id)}>Remove comment</button>
    
  </li>;

export default Comment;