import React from 'react';
import RecipeIndexItem from '../recipe/recipe_index_item';
import {selectBySearchTerm} from '../../reducers/selectors';


class Search extends React.Component {

  constructor(props){
    super(props)
    this.state = { term:'',
                   matching_recipes: []

    }
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleTermChange(e){
    this.setState({term: e.target.value});
  }

  handleSearch(e){

    e.preventDefault();
    let recipes_found = selectBySearchTerm(this.state.term, this.props.recipes);
    this.setState({matching_recipes: recipes_found});

  }

  componentDidMount() {
    this.props.requestAllRecipes();
    if(this.props.currentRecipe){
      this.props.removeRecipe(this.props.currentRecipe);

    }
  }
  render() {
        let recipeItems = (<p></p>);
        if(this.state.matching_recipes.length > 0){
          recipeItems = this.state.matching_recipes.map(recipe => (
              <RecipeIndexItem key={`recipe-index-item${recipe.id}`} recipe={recipe} />
            )
          );
        }

    return (
      <div className="SearchBar" >

        <div className="SearchBar-fields">
          <input placeholder="Search Recipes" onChange={this.handleTermChange}/>
          <button className="SearchBar-submit" type="button" onClick={this.handleSearch}>Search</button>

        </div>
        <ul className="recipe-list-search">
          { recipeItems }
        </ul>
      </div>
);
}
}


export default Search;
