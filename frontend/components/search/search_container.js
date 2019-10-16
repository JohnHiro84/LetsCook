import { connect } from 'react-redux';

import { selectAllRecipes, selectYourRecipes } from '../../reducers/selectors';
import Search from './search';
import { requestAllRecipes, removeRecipe } from '../../actions/recipe_actions';

const mapStateToProps = state => ({
  recipes: selectAllRecipes(state),
  currentRecipe: state.entities.recipes.current_recipe
});

const mapDispatchToProps = dispatch => ({
  requestAllRecipes: () => dispatch(requestAllRecipes()),
  removeRecipe: (rec_id) => dispatch(removeRecipe(rec_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
