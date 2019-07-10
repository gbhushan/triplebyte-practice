import React, { Component } from "react";
import { ColumnComponent } from "../components/";

const cardData = {
  header: "Winnie",
  id: `${Math.random() * 100}`,
  cards: [
    {
      id: 12312,
      detail: "Implement Kanban board"
    },
    {
      id: 19275321,
      detail: "Lorem Ipsum"
    }
  ]
};
const cardData2 = {
  header: "Bob",
  id: `${Math.random() * 100}`,
  cards: [
    {
      id: 12312,
      detail: "Implement Kanban board"
    },
    {
      id: 19275321,
      detail: "Lorem Ipsum"
    }
  ]
};
const cardData3 = {
  header: "Thomas",
  id: `${Math.random() * 100}`,
  cards: [
    {
      id: 12312,
      detail: "Implement Kanban board"
    },
    {
      id: 19275321,
      detail: "Lorem Ipsum"
    }
  ]
};
const cardData4 = {
  header: "George",
  id: `${Math.random() * 100}`,
  cards: [
    {
      id: 12312,
      detail: "Implement Kanban board"
    },
    {
      id: 19275321,
      detail: "Lorem Ipsum"
    }
  ]
};

export class KanbanBoard extends Component {
  constructor() {
    super();
    this.state = {
      cardsInformation: null
    };
    this.updateCardData = this.updateCardData.bind(this);
  }
  componentDidMount() {
    const data = [cardData, cardData2, cardData3, cardData4];
    this.setState({
      cardsInformation: data
    });
  }
  updateCardData({ cardId, incomingData, move }) {
    const { cardsInformation } = this.state;
    const cardIndex = cardsInformation.findIndex(card => {
      return cardId === card.id;
    });
    if (move) {
      switch (move.direction) {
        case "left":
          cardsInformation[cardIndex - 1].cards.push(incomingData);
          break;
        case "right":
          cardsInformation[cardIndex + 1].cards.push(incomingData);
          break;
        default:
      }
      cardsInformation[cardIndex].cards.splice(move.detailIndex, 1);
    } else {
      cardsInformation[cardIndex].cards.push(incomingData);
    }

    this.setState({
      cardsInformation
    });
  }
  render() {
    const { cardsInformation } = this.state;
    return (
      <React.Fragment>
        {cardsInformation &&
          cardsInformation.map(cardData => (
            <ColumnComponent
              cardId={cardData.id}
              name={cardData.header}
              cards={cardData.cards}
              updateCardData={this.updateCardData}
              key={cardData.id}
            />
          ))}
      </React.Fragment>
    );
  }
}
