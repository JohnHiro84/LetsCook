import React from 'react';
import { Link } from 'react-router-dom';

const RecipeIndexItem = ({ recipe }) => (
  <li className="recipe-index-item">
    <Link to={`/api/recipes/${recipe.id}`}>
      <img className="recipe-small-img" src={recipe.image_url} alt={recipe.title} />
      <h4>{recipe.title} <span> - {recipe.description}</span></h4>

    </Link>
  </li>
);

export default RecipeIndexItem;
