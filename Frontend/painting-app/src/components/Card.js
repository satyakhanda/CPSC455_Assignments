import React, { Component } from "react";
import {withRouter } from "react-router-dom";

class Card extends Component {
  showPopup = () => {
    this.props.history.push({
      pathname: `/imagepop/${this.props.artistName}`,
      search: `?link=${this.props.pieceLink}`,
    });
  };

  render() {
    let cardProp = {
      artistName: this.props.artistName,
      pieceName: this.props.pieceName,
      pieceLink: this.props.pieceLink,
      id: this.props.id
    }
    console.log(cardProp)
    return (
      <li className="list">
        <center>
          <div className="card">
            <img className="center" alt="" src={this.props.pieceLink}></img>
            <br />
            Artist Name: {this.props.artistName}
            <br />
            Piece Name: {this.props.pieceName}
            <br />
            <button onClick={this.showPopup}>Pop Out</button>
            {/* <button onClick={this.props.delete(cardProp)}>Delete</button> */}
            <button id={this.props.pieceLink} onClick={this.props.delete}>Delete</button>
            <br />
            <p hidden>ID: {this.props.id}</p>
          </div>
        </center>
      </li>
    );
  }
}

export default withRouter(Card);
