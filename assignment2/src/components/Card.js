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
          </div>
        </center>
      </li>
    );
  }
}

export default withRouter(Card);
