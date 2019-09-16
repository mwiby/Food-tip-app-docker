import React from "react";

const Details = props => {
  const { handlePage, handleNutrition, nutrition, recipe } = props;

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <button
              type="button"
              className="btn btn-warning mb-5
                  text-capitalize"
              onClick={() => handlePage(1)}
            >
              Back to recipe
            </button>
            <img
              src={recipe.image_url}
              className="d-block w-100"
              alt="recipt"
            />
            <h4 className="mt-3 text-info">Calories: {nutrition}</h4>
          </div>

          <div className="col-10 mx-auto col-md-6 my-3 mt-5">
            <h5 className="text-uppercase">{recipe.title}</h5>
            <h6 className="text-warning text-capitalize">
              Publisher: {recipe.publisher}
            </h6>
            <ul className="list-group mt 4">
              <h2 className="mt-3">Ingredients:</h2>

              {recipe.ingredients.map((item, index) => {
                return (
                  <li key={index} className="list-group-item">
                    {item}

                    <button
                      type="button"
                      className="btn btn-link mt-7 btn-block btn-sm"
                      onClick={() => handleNutrition(item)}
                    >
                      kcal>>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
