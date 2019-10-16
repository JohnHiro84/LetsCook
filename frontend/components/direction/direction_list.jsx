import React from 'react';

import DirectionForm from './direction_form';
import DirectionListItemContainer from './direction_list_item_container';

const DirectionList = ({ directions, recipe_id, createDirection, session_id, user, author }) => {
  const directionItems = directions.map(direction => (

    <DirectionListItemContainer
      key={direction.id}
      direction={direction} user={user} author={author}/>
  ));

    let show_form;

    if(user && user === author){

      show_form = (< DirectionForm recipe_id={ recipe_id } createDirection={ createDirection } />);
    } else {

      show_form = "";
    }


  return (
    <div>
       <ul>
        { directionItems }
       </ul>
      {show_form}
    </div>
  )
};

export default DirectionList;
