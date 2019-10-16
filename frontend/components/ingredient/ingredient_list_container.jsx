import { connect } from 'react-redux';
import IngredientList from './ingredient_list';

import { ingredientsByRecipeId } from '../../reducers/selectors';
import { receiveIngredient, createIngredient } from '../../actions/ingredient_actions';

const mapStateToProps = (state, { recipe_id }) => {
    let session_id = state.session.id;
    let user = state.entities.users[state.session.id].username;
    let author = state.entities.recipes.current_recipe.recipe.author;
    return {
      session_id,
      ingredients: ingredientsByRecipeId(state, recipe_id),
      recipe_id,
      user,
      author
    }
};

const mapDispatchToProps = dispatch => ({
  receiveIngredient: ingredient => dispatch(receiveIngredient(ingredient)),
  createIngredient: (recipe_id, ingredient ) => dispatch(createIngredient(recipe_id, ingredient ))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientList);
