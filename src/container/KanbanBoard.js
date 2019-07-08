import React, {Component} from 'react';
import ColumnComponent from '../components/ColumnComponent.js';
// import "./styles.scss";

const cardData = [{
    "id": 12312,
    "detail": "Implement Kanban board"
  }, {
    "id": 19275321,
    "detail": "Lorem Ipsum"
  }];
  const cardData2 = [{
    "id": 12312,
    "detail": "Implement Kanban board"
  }, {
    "id": 19275321,
    "detail": "Lorem Ipsum"
  }];
  const cardData3 = [{
    "id": 12312,
    "detail": "Implement Kanban board"
  }, {
    "id": 19275321,
    "detail": "Lorem Ipsum"
  }];
  const cardData4 = [{
    "id": 12312,
    "detail": "Implement Kanban board"
  }, {
    "id": 19275321,
    "detail": "Lorem Ipsum"
  }];

export class KanbanBoard extends Component {
    constructor() {
        super();
        this.state = {
          cardsInformation: [cardData, cardData2, cardData3, cardData4]
        }
        this.updateCardData = this.updateCardData.bind(this);
    }
    updateCardData() {
        
    }
      render() {
        //   To-do create a map to build column component
          return (<React.Fragment>
              <ColumnComponent name={"Winnie"} cards={cardData} updateCardData={this.updateCardData} />
          <ColumnComponent name={"Bob"} cards={cardData} updateCardData={this.updateCardData} />
          <ColumnComponent name={"Thomas"} cards={cardData} updateCardData={this.updateCardData} />
          <ColumnComponent name={"George"} cards={cardData} updateCardData={this.updateCardData} />
          </React.Fragment>)
        
      }
}