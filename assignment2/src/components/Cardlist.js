import React, { Fragment, useEffect, useState } from "react";
import { withRouter } from "react-router";
import Card from "./Card";

const Cardlist = (props) => {
  const [preLoaded, setPreLoaded] = useState([
    {
      artistName: "Pablo Picasso",
      pieceName: "Les Demoiselles d'Avignon",
      pieceLink:
        "https://render.fineartamerica.com/images/rendered/default/flat/tapestry/images-medium-5/les-demoiselles-d-avignon-pablo-picasso.jpg?&targetx=0&targety=-84&imagewidth=930&imageheight=962&modelwidth=930&modelheight=794&backgroundcolor=E0A693&orientation=1&producttype=tapestry-88-104",
    },
    {
      artistName: "Paul Cézanne",
      pieceName: "Bouilloire et fruits",
      pieceLink:"http://prod-upp-image-read.ft.com/0c7266fa-6a3d-11ea-800d-da70cff6e4d3"    },
  ]);

  var [artistName, setArtistName] = useState("");
  var [pieceName, setpieceName] = useState("");
  var [link, setlink] = useState("");

  useEffect(() => {
    createCard()
  }, [preLoaded]);


  
var createCard = ()=> {
  if (preLoaded.length >= 1) {
    return preLoaded.map((card) => {
      return (
        <Card
        pieceName={card.pieceName}
        pieceLink={card.pieceLink}
        artistName={card.artistName}
      />
      )
    })
  }
}


var clearInputs = () => { 
  document.getElementById("Form-Elements").reset();
}

var onClickEvents = () => {
  setPreLoaded([ { artistName: artistName, pieceName: pieceName, pieceLink: link}, ...preLoaded]);
  clearInputs();
}


  return (
    <Fragment>
      <div>
        <center>
          <form id="Form-Elements">
            <label >Artist Name: </label>
            <input id="name" type="text" onChange={e => setArtistName(e.target.value)}/>
            <br />
            <br />
            <label >Name of Piece: </label>
            <input id="piece" type="text" onChange={e => setpieceName(e.target.value)}/>
            <br />
            <br />
            <label >URL: </label>
            <input id="url" type="text" onChange={e => setlink(e.target.value)}/>
            <br />
            <br />
            <input type="button" value="Submit" onClick={() =>  onClickEvents()} />
            <input type="button" value="Clear" onClick={() =>  clearInputs()} />
          </form>
        </center>
      </div>
      <div>
        <ul>{createCard()}</ul>
      </div>
    </Fragment>
  );
};

export default withRouter(Cardlist);
