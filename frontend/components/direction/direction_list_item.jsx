import React from 'react';
import merge from 'lodash/merge';

class DirectionListItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let button_destroy;
    if( this.props.user === this.props.author){
      button_destroy = (<button
        className="direction-delete-button"
        onClick={ this.props.destroyDirection } >
        X</button>);
    } else {
      button_destroy = "";
    }
    return (
      <li className="direction-header">
        <div className="direction-info">
          <h4>{ this.props.direction.description }
          <span>
            {button_destroy}
          </span>
          </h4>
        </div>
        <div className="direction-buttons">


        </div>
      </li>
    );
  }
}


export default DirectionListItem;
