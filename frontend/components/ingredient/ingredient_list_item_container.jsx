import { connect } from 'react-redux';
import IngredientListItem from './ingredient_list_item';

import { destroyIngredient } from '../../actions/ingredient_actions';


const mapDispatchToProps = (dispatch, { ingredient }) => ({
  destroyIngredient: () => dispatch(destroyIngredient(ingredient))
});

export default connect(
  null,
  mapDispatchToProps
)(IngredientListItem);
