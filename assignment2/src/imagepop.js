import React from "react";
import { withRouter } from "react-router";
import "./App.css";

const Pop = (props) => {
  return (
    <center>
      <h1>Popup Page</h1>
      <div className="card">
        <img
          className="center"
          alt=""
          src={props.location.search.substring(6)}
        ></img>
        <br />
        Artist Name = {props.match.params.name}
      </div>
    </center>
  );
};

export default withRouter(Pop);
