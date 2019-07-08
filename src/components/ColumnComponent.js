import React, { Component } from "react";
import "./styles.scss";

class ColumnComponent extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.move = this.move.bind(this);
  }
  onClick() {
    const { updateCardData, cardId } = this.props;
    const result = window.prompt("Add a new Card");

    updateCardData({
      cardId,
      incomingData: {
        detail: result,
        id: Math.random() * 100
      }
    });
  }
  move(detailId, direction) {
    const { updateCardData, cardId, cards } = this.props;
    const index = cards.findIndex(card => card.id === detailId);
    updateCardData({
      cardId,
      incomingData: {
        detail: cards[index].detail,
        id: cards[index].id
      },
      move: {
        direction,
        detailIndex: index
      }
    });
  }
  render() {
    const { name, cards } = this.props;
    return (
      <div className="card-column">
        <div className="card-header">{name}</div>
        <ul>
          {cards.map(data => {
            const { id } = data;
            return (
              <li key={id}>
                <div onClick={() => this.move(id, "left")}>&lt;</div>
                <div>{data.detail}</div>
                <div onClick={() => this.move(id, "right")}>&gt;</div>
              </li>
            );
          })}
        </ul>
        <button onClick={this.onClick}>+ Add a card</button>
      </div>
    );
  }
}

export default ColumnComponent;
