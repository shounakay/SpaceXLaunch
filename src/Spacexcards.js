import React from "react";

const Spacexcards = ({ cards }) => {
  return (
    <>
      {cards.map((card) => {
        return (
          <div className="card" key={card.flight_number}>
            <img
              src={card.links.mission_patch_small}
              alt={card.mission_name}
              className="card__image"
            />
            <div className="card__content">
              <h4 className="card__title">
                {card.mission_name}
                <span>#</span>
                <span>{card.flight_number}</span>
              </h4>
              <div className="card__missionId">
                <h4 className="card__infoHeading">Mission id:</h4>
                <ul className="mission__list">
                  {card.mission_id.length === 0 ? (
                    <li>No Data</li>
                  ) : (
                    card.mission_id.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))
                  )}
                </ul>
              </div>
              <div className="card__launchYear">
                <h4 className="card__infoHeading">
                  Launch Year:
                  <span className="launch__year">{card.launch_year}</span>
                </h4>
              </div>
              <table className="card__successfulLaunch">
                <tbody>
                  <tr style={{ padding: "0px" }}>
                    <td className="card__infoHeading">
                      <h4 className="card__infoTitle">Successful Launch:</h4>
                    </td>
                    <td>
                      <h4 className="launch_success">
                        {card.launch_success.toString()}
                      </h4>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="card__successfulLaunch">
                <tbody>
                  <tr style={{ padding: "0px" }}>
                    <td className="card__infoHeading">
                      <h4 className="card__infoTitle">Successful Landing:</h4>
                    </td>
                    <td>
                      <h4 className="launch_success">
                        {card.launch_success.toString()}
                      </h4>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Spacexcards;
