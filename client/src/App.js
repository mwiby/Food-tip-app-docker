import React, { Component } from "react";
import Details from "./Details";
import List from "./List"; // imports all the components used, these are for interface view only
import Tips from "./Tips";
class App extends Component {
  state = {
    recipeList: [], // recipes that shows after search
    id: "",
    recipeInfo: {}, // ingredients of recipes
    page: 1, // start page
    search: "",
    nutrition: "",
    wine: ""
  };

  /*
  componentDidMount() {
   Dident need componentDidMount because don't have any default recipes
  }
*/
  async baseRecipes() {
    try {
      const res = await fetch("http://localhost:4000/baseRecipes");
      const resData = await res.json();
      // puts value received from server into state
      this.setState({
        recipeList: resData.data
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getRecipe() {
    const search = this.state.search;

    try {
      //sends value search to server
      const res = await fetch(`http://localhost:4000/search?search=${search}`);

      const resData = await res.json();

      this.setState({
        recipeList: resData.data,
        search: "",
        input: ""
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getDetails(index, id) {
    try {
      //sends value search to id
      const res = await fetch(`http://localhost:4000/id?id=${id}`);

      const resData = await res.json();
      // puts value received from server into state
      this.setState({
        recipeInfo: resData.data,
        page: index
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getNutrition(ingr) {
    try {
      //sends value search to ingr
      const res = await fetch(`http://localhost:4000/nutrition?nutr=${ingr}`);

      const resData = await res.json();
      // puts value received from server into state
      this.setState({
        nutrition: resData.data.calories
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getRanked() {
    try {
      // calls topRanked on server
      const res = await fetch("http://localhost:4000/topRanked");
      const resData = await res.json();
      // puts value received from server into state
      this.setState({
        recipeList: resData.data
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getWine(title, id) {
    try {
      //sends value title to server
      const res = await fetch(`http://localhost:4000/getWine?food=${title}`);
      const resData = await res.json();

      const wines = resData.data;
      // puts value received from server into state
      this.setState({
        wine: wines,
        id: id
      });
    } catch (error) {
      console.log(error);
    }
  }

  // This method is called every time there are changes in state, running a new page if page value in state changes.

  // Then the methods and data in the state are passed down to the components through props, so that they can be used but this components cant
  // change the data.
  displayPage = index => {
    switch (index) {
      default:
        break;
      case 2:
        return (
          <Tips
            recipeList={this.state.recipeList}
            handlePage={this.handlePage}
            wine={this.state.wine}
            handleDetails={this.handleDetails}
            handleWine={this.handleWine}
            id={this.state.id}
          />
        );

      case 1:
        return (
          <List
            recipeList={this.state.recipeList}
            handleDetails={this.handleDetails}
            value={this.state.search}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handlePage={this.handlePage}
            page={this.state.page}
          />
        );
      case 0:
        return (
          <Details
            id={this.state.id}
            handlePage={this.handlePage}
            recipe={this.state.recipeInfo}
            handleNutrition={this.handleNutrition}
            nutrition={this.state.nutrition}
          />
        );
    }
  };

  handleNutrition = item => {
    this.getNutrition(item);
  };
  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.getRecipe();
  };

  handlePage = index => {
    if (index === 1) {
      this.setState({
        recipeList: [],
        page: index,
        nutrition: "",
        search: "",
        input: "",
        wine: ""
      });
    }

    if (index === 2) {
      this.getRanked();
      this.setState({
        page: index,
        nutrition: "",
        recipeList: []
      });
    }

    this.setState({
      page: index,
      nutrition: ""
    });
  };
  handleDetails = (index, id) => {
    this.getDetails(index, id);
  };
  handleWine = (title, id) => {
    this.getWine(title, id);
  };

  render() {
    // The page is dynamic and declarative and updates based on state page

    return <React.Fragment>{this.displayPage(this.state.page)}</React.Fragment>;
  }
}
export default App;
