import React from "react";
import SearchBox from "./SearchBox";
import Recipe from "./Recipe";

const List = props => {
  const {
    recipeList,
    handleDetails,
    value,
    handleChange,
    handleSubmit,
    handlePage,
    page
  } = props;

  return (
    <React.Fragment>
      <SearchBox
        value={value}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handlePage={handlePage}
      />

      <div className="container my-5 ">
        <div className="row">{/*title*/}</div>
        <div className="row">
          {recipeList !== "" ? (
            recipeList.map(recipe => {
              return (
                <Recipe
                  key={recipe.recipe_id}
                  id={recipe.recipe_id}
                  recipe={recipe}
                  handleDetails={handleDetails}
                  page={page}
                />
              );
            })
          ) : (
            <h5>Search for recipes </h5>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default List;
