import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <section>
      <Jumbotron className="jumbotron">
        <div className="header-bg">
          <h1><FontAwesomeIcon icon={faFutbol} /> Soccer World</h1>
        </div>
      </Jumbotron>
    </section>
  );
};

export default Header;
