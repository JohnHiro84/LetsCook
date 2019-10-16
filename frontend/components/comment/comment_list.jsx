import React from 'react';

import CommentForm from './comment_form';

const CommentList = ({ comments, recipe_id, createComment, session_username }) => {


  const commentItems = comments.map(comment => (

    <li
      key={comment.id} >
      <p>{comment.author}: {comment.body}</p>
      <h5>{comment.created_at.substring(0,10)} {comment.created_at.substring(12,19)}</h5>
      </li>
  ));

  return (
    <div>

       <ul className="comments-ul">
        { commentItems }
       </ul>
      <h3>Add A Comment: </h3>
      <CommentForm recipe_id={ recipe_id } author = {session_username} createComment={ createComment } />
    </div>
  )
};

export default CommentList;
