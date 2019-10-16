import React from 'react';
import IngredientForm from './ingredient_form';
import IngredientListItemContainer from './ingredient_list_item_container';

const IngredientList = ({ ingredients, recipe_id, createIngredient, session_id, user, author }) => {
  const ingredientItems = ingredients.map(ingredient => (

      <IngredientListItemContainer
        key={ingredient.id}
        ingredient={ingredient} user={user} author={author} />
  ));

  let show_form;

  if(user && user === author){
    show_form = (<IngredientForm recipe_id={ recipe_id } createIngredient={ createIngredient } />);
  } else {
    show_form = "";
  }

  return (
    <div>
       <ul>
        { ingredientItems }
       </ul>
      {show_form}
    </div>
  )
};

export default IngredientList;
