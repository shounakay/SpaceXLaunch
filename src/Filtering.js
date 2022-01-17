import React from "react";

const Filtering = ({ launchYears, filterYear, filterByLandSuccess }) => {
  const data = ["Successful Launch", "Succesful Landing"];
  const flag = ["true", "false"];
  const [landSuccess, setLandSuccess] = React.useState();
  const [yearIdentifier, setYearIdentifier] = React.useState();

  const filterAndStyleYear = (year) => {
    if (yearIdentifier === year) {
      setYearIdentifier("");
    } else {
      setYearIdentifier(year);
    }
    filterYear(year);
  };

  const filterAndStyleSuccess = (success) => {
    if (landSuccess === success) {
      setLandSuccess("");
    } else {
      setLandSuccess(success);
    }
    filterByLandSuccess(success);
  };

  console.log(launchYears);
  return (
    <div className="filterPanel">
      <div className="filter__header">
        <h4 className="filter__title">Filters</h4>
      </div>
      <div className="filter__launchYear">
        <div className="subPanel">
          <div className="subPanel__header">
            <h4 className="subPanel__title">Launch Year</h4>
          </div>
          <div className="subPanel__years">
            {launchYears.map((year) => {
              return (
                <div className="button__container" key={year}>
                  <div className="year__button" id={year}>
                    <button
                      type="button"
                      className="MuiButtonBase-root MuiButton-root MuiButton-text"
                      style={
                        yearIdentifier === year
                          ? { backgroundColor: "#32CD32" }
                          : {}
                      }
                      onClick={() => filterAndStyleYear(year)}
                    >
                      <span className="MuiButton-label">{year}</span>
                      <span className="MuiTouchRipple-root"></span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {data.map((item) => {
        console.log(item);
        return (
          <div className="filter__launchYear">
            <div className="subPanel">
              <div className="subPanel__header">
                <h4 className="subPanel__title">{item}</h4>
              </div>
              <div className="subPanel__years">
                {flag.map((item) => {
                  console.log(item);
                  return (
                    <div className="button__container">
                      <div className="year__button">
                        <button
                          type="button"
                          className="MuiButtonBase-root MuiButton-root MuiButton-text"
                          style={
                            landSuccess === item
                              ? { backgroundColor: "#32CD32" }
                              : {}
                          }
                          onClick={() => filterAndStyleSuccess(item)}
                        >
                          <span className="MuiButton-label">{item}</span>
                          <span className="MuiTouchRipple-root"></span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Filtering;
