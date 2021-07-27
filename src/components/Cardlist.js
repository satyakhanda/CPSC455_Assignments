import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { withRouter } from "react-router";
import Card from "./Card";

const Cardlist = (props) => {
  const [preLoaded, setPreLoaded] = useState([]);
  var [artistName, setArtistName] = useState("");
  var [pieceName, setpieceName] = useState("");
  var [link, setlink] = useState("");

  useEffect(() => {
    fetch("/api/tradingcards")
      .then((res) => res.json())
      .then((cards) => setPreLoaded(cards));
  }, []);

  var createCard = () => {
    console.log(preLoaded)
    if (preLoaded.length >= 1) {
      return preLoaded.map((card) => {
        return (
          <Card
            pieceName={card.pieceName}
            pieceLink={card.pieceLink}
            artistName={card.artistName}
            id={card.id}
            delete={(e) => deleteCard(e.target.id)}
          />
        );
      });
    }
  };

  var deleteCard = (cardId) => {
    console.log("DELETE CARD CALLED")
    console.log(cardId);
    axios
      .delete("/api/tradingcards", { data: { id: cardId } })
      .then((response) => {
        console.log(response);
      });
  };

  var deleteAll = () => {
    axios.delete("/api/tradingcards/all").then((response) => {
      console.log(response);
    });
  };

  var clearInputs = () => {
    document.getElementById("Form-Elements").reset();
  };

  var onClickEvents = () => {
    const newCard = {
      artistName: artistName,
      pieceName: pieceName,
      pieceLink: link,
    };
    axios
      .post("/api/tradingcards", newCard)
      .then((response) => {
        console.log(response);
        setPreLoaded(response);
      })
      .catch((error) => {
        console.log(error);
      });
    clearInputs();
    // fetch("/api/tradingcards")
    //   .then((res) => res.json())
    //   .then((cards) => setPreLoaded(cards));
  };

  var loadInitial = () => {
    fetch("/api/tradingcards/initialCards").then((res) => res.json());
  };

  return (
    <Fragment>
      <div>
        <center>
          <form id="Form-Elements">
            <label>Artist Name: </label>
            <input
              id="name"
              type="text"
              onChange={(e) => setArtistName(e.target.value)}
            />
            <br />
            <br />
            <label>Name of Piece: </label>
            <input
              id="piece"
              type="text"
              onChange={(e) => setpieceName(e.target.value)}
            />
            <br />
            <br />
            <label>URL: </label>
            <input
              id="url"
              type="text"
              onChange={(e) => setlink(e.target.value)}
            />
            <br />
            <br />
            <input
              type="button"
              value="Submit"
              onClick={() => onClickEvents()}
            />
            <input type="button" value="Clear" onClick={() => clearInputs()} />
            <input
              type="button"
              value="Delete All"
              onClick={() => deleteAll()}
            />
            <input
              type="button"
              value="Load Inital Cards"
              onClick={() => loadInitial()}
            />
          </form>
        </center>
      </div>
      {/* <div className="parentDiv">
      {preLoaded.map((card, index) => <div key={index}>{card.pieceName}</div>)}
      </div> */}
      <div>
        <ul>{createCard()}</ul>
      </div>
    </Fragment>
  );
};

export default withRouter(Cardlist);
