import React, { useState, useEffect } from "react";
import Filtering from "./Filtering";
import Loading from "./Loading";
import SpaceXcards from "./Spacexcards";

const url = "https://api.spaceXdata.com/v3/launches?limit=100";

function App() {
  const [spacexdata, setSpacexdata] = useState();
  const [pseudodata, setPseudodata] = useState();
  const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState();
  const [selectedyear, setSelectedyear] = useState();
  const [launchYears, setLaunchYears] = useState();

  const filterByYear = (year) => {
    console.log("hey there");
    if (selectedyear === year && clicked) {
      const newSpaceXitems = pseudodata.filter(
        (item) => item.launch_success.toString() === clicked
      );
      setSpacexdata(newSpaceXitems);
      setSelectedyear("");
    } else if (selectedyear === year) {
      setSpacexdata(pseudodata);
      setSelectedyear("");
    } else {
      const newSpacexdata = pseudodata.filter(
        (item) => item.launch_year === year
      );
      setSpacexdata(newSpacexdata);
      setSelectedyear(year);
    }
  };

  const filterByLandingSucc = (flag) => {
    if (clicked === flag && selectedyear.length !== 0) {
      const newSpacexitems = pseudodata.filter(
        (item) => item.launch_year === selectedyear
      );
      setSpacexdata(newSpacexitems);
      setClicked();
    } else if (selectedyear.length !== 0) {
      const newSpacexitems = pseudodata.filter(
        (item) =>
          item.launch_success.toString() === flag &&
          item.launch_year === selectedyear
      );
      setSpacexdata(newSpacexitems);
      setClicked(flag);
    } else {
      if (clicked === flag) {
        setSpacexdata(pseudodata);
        setClicked();
      } else {
        const newSpaceXitems = pseudodata.filter(
          (item) => item.launch_success.toString() === flag
        );
        setSpacexdata(newSpaceXitems);
        setClicked(flag);
      }
    }
  };

  const fetchMissiles = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const missiles = await response.json();
      setSpacexdata(missiles);
      setPseudodata(missiles);
      setLaunchYears([...new Set(missiles.map((item) => item.launch_year))]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchMissiles();
  }, []);

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <div className="app">
      <div className="app__header" style={{ textAlign: "center" }}>
        <h2>SPACEX LAUNCH PROGRAMS</h2>
      </div>
      <div className="app__content">
        <div className="app__body">
          <div className="app__filter">
            <Filtering
              launchYears={launchYears}
              filterYear={filterByYear}
              filterByLandSuccess={filterByLandingSucc}
            />
          </div>
          <div className="app__cards">
            <div className="card__container">
              <SpaceXcards cards={spacexdata} />
            </div>
          </div>
        </div>
        <div class="app__footer">
          <h2>Developed by : Shounak Chavan</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
