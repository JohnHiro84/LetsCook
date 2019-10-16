import { connect } from 'react-redux';

import RecipeIndex from './recipe_index';
import { requestAllRecipes } from '../../actions/recipe_actions';
import { selectAllRecipes, selectYourRecipes } from '../../reducers/selectors';


const mapStateToProps = state => ({
  recipes: selectYourRecipes(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllRecipes: () => dispatch(requestAllRecipes())

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeIndex);
