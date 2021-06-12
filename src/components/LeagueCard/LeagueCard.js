import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./LeagueCard.css";

const LeagueCard = (props) => {
  const { idLeague, strLeague, strSport } = props.league;
  const [leagueLogo, setLeagueLogo] = useState("");
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLeagueLogo(data.leagues[0].strBadge));
  }, [idLeague]);
  
  let history = useHistory();

  const handleLeagueDetails = (id) => {
    const url = `/league/${id}`
      history.push(url);
  }

  return (
    <Card className="card">
      <Card.Img className='card-img' variant="top" src={leagueLogo} />
      <Card.Body>
        <Card.Title className="card-title"> {strLeague} </Card.Title>
        <Card.Text className="sport-type">Sports type: {strSport}</Card.Text>
        <Button onClick={() => handleLeagueDetails(idLeague)} className="card-button">
          Explore &nbsp;
          <FontAwesomeIcon icon={faArrowRight} />{" "}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default LeagueCard;
