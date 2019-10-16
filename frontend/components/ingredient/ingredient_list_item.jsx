import React from 'react';
import merge from 'lodash/merge';

class IngredientListItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let button_destroy;
    if( this.props.user === this.props.author){
      button_destroy = (<button
        className="ingredient-delete-button"
        onClick={ this.props.destroyIngredient } >
        X</button>);
    } else {
      button_destroy = "";
    }

    return (
      <li className="ingredient-header">
        <div className="ingredient-info">
          <h4>{ this.props.ingredient.description }
          <span>{button_destroy}</span></h4>

        </div>
        <div className="ingredient-buttons">

        </div>
      </li>
    );
  }
}


export default IngredientListItem;
