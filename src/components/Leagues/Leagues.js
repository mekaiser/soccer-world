import React, { useEffect, useState } from "react";
import LeagueCard from "../LeagueCard/LeagueCard";
import "./Leagues.css";

const Leagues = () => {
  const [leagues, setLeagues] = useState([]);
  const leaguesSlicer = (leaguesFromApi) => {
    const leaguesSetUp = leaguesFromApi.slice(0, 21);
    setLeagues(leaguesSetUp);
  };
  useEffect(() => {
    fetch("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php")
      .then((res) => res.json())
      .then((data) => leaguesSlicer(data.leagues));
  }, []);
  return (
    <div className="leagues d-flex justify-content-center flex-wrap">
      {leagues.map((league) => (
        <LeagueCard key={league.idLeague} league={league}></LeagueCard>
      ))}
    </div>
  );
};

export default Leagues;
