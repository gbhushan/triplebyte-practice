import React, {Component} from 'react';
import "./styles.scss";

// const state = {
//     newCardData: []
// }

class ColumnComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            newCardData: []
        };
        this.onClick = this.onClick.bind(this);
        this.moveLeft = this.moveLeft.bind(this);
        this.moveRight = this.moveRight.bind(this);
    }
    onClick() {
        const {newCardData} = this.state;
        const result = window.prompt("Add a new Card");

        newCardData.push(result);
        console.log(newCardData);
        this.setState({
            newCardData
        });
    }
    moveLeft(event) {
        debugger;
        const { updateCardData} = this.props;
        console.log("move left");
    }
    moveRight() {
        console.log("move right");
    }
    render() {
        const {name, cards} = this.props;
        const {newCardData} = this.state;
        return (
            <div className="card-column">
                <div className="card-header">{name}</div>
                <ul>
                {cards.map((data) =>
                    <React.Fragment><div onClick={(event) => this.moveLeft(event)}>&lt;</div><li>{data.detail}</li><div onClick={this.moveRight}>&gt;</div></React.Fragment>
                )}
                {newCardData.length > 0 && newCardData.map((data) =>
                    <li>{data}</li>
                )}
                </ul>
                <button onClick={this.onClick}>+ Add a card</button>
            </div>
        ) 
    }
}

export default ColumnComponent;