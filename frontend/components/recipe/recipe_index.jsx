import React from 'react';
import RecipeIndexItem from './recipe_index_item';
import RecipeDetailContainer from './recipe_detail_container';
import { Route } from 'react-router-dom';
// import RecipeList from './recipe_list';
import { Link} from 'react-router-dom';

class RecipeIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllRecipes();
  }
 
  render() {
    const { recipes} = this.props;

    let recipeItems = recipes.map(recipe => (
        <RecipeIndexItem key={`recipe-index-item${recipe.id}`} recipe={recipe} />
      )
    );

    return (
      <div>
      <ul className="recipe-list">
        { recipeItems }
      </ul>

      <Route path="/api/recipes/:recipeId" component= {RecipeDetailContainer} />
      </div>
    );
  }
}

export default RecipeIndex;
