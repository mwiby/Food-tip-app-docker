import React from "react";

const SearchBox = props => {
  const { value, handleChange, handleSubmit, handlePage } = props;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5 text-center">
            <form action="" className="mt-4" onSubmit={handleSubmit}>
              <label htmlFor="search" className="text-capitalize">
                Type Food
              </label>
              <div className="input-group">
                <input
                  type="text"
                  name="search"
                  placeholder="Hamburger,Omelette"
                  className="form-control"
                  value={value}
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <button
                    type="submit"
                    className="input-group-text bg-secondary text-white"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
            <button
              type="button"
              className="input-group-text bg-success text-white ml-2 mx-auto mt-5 mb-3"
              onClick={() => handlePage(2)}
            >
              Get top ranked Food/Wine tips
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchBox;
