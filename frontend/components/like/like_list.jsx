import React from 'react';

import LikeForm from './like_form';

const LikeList = ({ likes, recipe_id, createLike, session_id, destroyLike }) => {

  const like_number = likes.length;

  return (
    <div>
       <h3>{like_number} likes</h3>
      <LikeForm likes = {likes} recipe_id={ recipe_id } user_id = {session_id} createLike={ createLike } destroyLike ={destroyLike} />
    </div>
  )
};

export default LikeList;
