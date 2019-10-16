import { uniqueId } from '../../util/id_generator'
import React from 'react';

class DirectionForm extends React.Component {
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
    const direction = Object.assign({}, this.state, { id: uniqueId() });
    console.log(direction);
    this.props.createDirection(this.props.recipe_id, direction).then(
      this.setState({
        description: ""
      }) 
    );
  }

  render() {
    return (
      <form className="direction-form" onSubmit={ this.handleSubmit }>
        <h3>Add A Direction: </h3>
        <label className="directionLabel">Description:</label>
          <input
            className="directionInput"
            ref="description"
            value={ this.state.description }
            placeholder="stir the contents in a bowl"
            onChange={ this.update('description') }
            required />

        <button className="step-button-form">Add Direction!</button>
      </form>
    );
  }
}

export default DirectionForm;
