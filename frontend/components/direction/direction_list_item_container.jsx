import { connect } from 'react-redux';
import DirectionListItem from './direction_list_item';

import { destroyDirection } from '../../actions/direction_actions';

const mapDispatchToProps = (dispatch, { direction }) => ({
  destroyDirection: () => dispatch(destroyDirection(direction))
});

export default connect(
  null,
  mapDispatchToProps
)(DirectionListItem);
