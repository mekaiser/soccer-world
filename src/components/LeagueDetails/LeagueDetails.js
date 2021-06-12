import {
  faFlag,
  faFutbol,
  faMars,
  faThumbtack
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Jumbotron } from "react-bootstrap";
import { useParams } from "react-router-dom";
import femaleLeaguePhoto from "../../images/Photo/female.png";
import maleLeaguePhoto from "../../images/Photo/male.png";
import "./LeagueDetails.css";

const LeagueDetails = () => {
  const { leagueId } = useParams();
  const [leagueDetails, setLeagueDetails] = useState({});
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLeagueDetails(data.leagues[0]));
    //   notSureFix
  }, [leagueId]);

  const handleGenderWiseLeaguePhoto = (gender) => {
    if (gender) {
      if (gender.toLowerCase() === "male") {
        return maleLeaguePhoto;
      } else if (gender.toLowerCase() === "female") {
        return femaleLeaguePhoto;
      }
    }
  };
  return (
    <>
      <section>
        <Jumbotron className="jumbotron">
          <div className="header-bg-league-details">
            <img src={leagueDetails.strBadge} alt='league badge' ></img>
          </div>
          <div className="league-details"></div>
        </Jumbotron>
      </section>

      <section className="league-details">
        <div className="leagueDetailsOverview">
          <div>
            <h1>{leagueDetails.strLeague}</h1>
            <br />
            <p>
              <FontAwesomeIcon icon={faThumbtack} />
              &nbsp; Founded: {leagueDetails.intFormedYear}
            </p>
            <p>
              <FontAwesomeIcon icon={faFlag} />
              &nbsp; Country: {leagueDetails.strCountry}
            </p>
            <p>
              <FontAwesomeIcon icon={faMars} />
              &nbsp; Sport Type: {leagueDetails.strSport}
            </p>
            <p>
              <FontAwesomeIcon icon={faFutbol} />
              &nbsp; Gender: {leagueDetails.strGender}
            </p>
          </div>
          <img
            src={handleGenderWiseLeaguePhoto(leagueDetails.strGender)}
            alt=""
          />
        </div>
        <div className='leagueDetailsDescription'>
            <p>{leagueDetails.strDescriptionEN}</p>
        </div>
      </section>
    </>
  );
};

export default LeagueDetails;
