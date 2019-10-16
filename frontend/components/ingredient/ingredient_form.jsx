import { uniqueId } from '../../util/id_generator'
import React from 'react';

class IngredientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      recipe_id: this.props.recipe_id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const ingredient = Object.assign({}, this.state, { id: uniqueId() });
    console.log(ingredient);
    this.props.createIngredient(this.props.recipe_id, ingredient).then(
      this.setState({
        description: ""
      }) // reset form
    );
  }

  render() {
    return (
      <form className="ingredient-form" onSubmit={ this.handleSubmit }>
        <h3>Add An Ingredient: </h3>
        <label className="ingredientLabel">Description:</label>
          <input
            className="ingredientInput"
            ref="description"
            value={ this.state.description }
            placeholder="cranberries"
            onChange={ this.update('description') }
            required />

        <button className="step-button-form">Add Ingredient!</button>
      </form>
    );
  }
}

export default IngredientForm;
