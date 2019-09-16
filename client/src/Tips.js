import React from "react";
import Recipe from "./Recipe";
const Tips = props => {
  const { recipeList, handlePage, wine, handleDetails, handleWine, id } = props;

  return (
    <React.Fragment>
      <div className="container my-5 ">
        <div className="row">
          <h3 className="text-capitalize text-center">Top ranked Recipes</h3>
          <button
            type="button"
            className="btn btn-warning mb-5
                  text-capitalize ml-3"
            onClick={() => handlePage(1)}
          >
            Back to Home
          </button>
          <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3"></div>
        </div>
        <div className="row">
          {recipeList.length > 1 ? (
            recipeList.map(recipe => {
              return (
                <Recipe
                  key={recipe.recipe_id}
                  id={id}
                  recipe={recipe}
                  handleDetails={handleDetails}
                  handleWine={handleWine}
                  wine={wine}
                />
              );
            })
          ) : (
            <h5>Loading</h5>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Tips;
