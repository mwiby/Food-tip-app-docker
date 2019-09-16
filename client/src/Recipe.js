import React from "react";

const Recipe = props => {
  const { handleDetails, recipe, id, page, handleWine, wine } = props;

  return (
    <React.Fragment>
      <div className="col-10 max-auto col-md-6 col-lg-4 my-3">
        <div className="card">
          <img
            src={recipe.image_url}
            className="img-card-top"
            style={{ height: "12rem" }}
            alt="image-recipe"
          />
          <div className="card-body text-capitalize">
            <h6>{recipe.title}</h6>
            <h6 className="text warning">publisher: {recipe.publisher}</h6>
          </div>
          {page === 1 ? (
            <div className="card-footer bg-dark">
              <button
                type="button"
                className="btn btn-info max-auto text-capitalize"
                onClick={() => handleDetails(0, id)}
              >
                Details
              </button>
            </div>
          ) : (
            <div className="card-footer bg-dark">
              <button
                type="button"
                className="btn btn-info max-auto text-capitalize"
                onClick={() => handleWine(recipe.title, recipe.recipe_id)}
              >
                Appropriate Wine
              </button>
              {id === recipe.recipe_id ? (
                <h5 className="text-white inline-block text-capitalize font-italic mt-2">
                  {wine}
                </h5>
              ) : (
                <h5></h5>
              )}
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Recipe;
