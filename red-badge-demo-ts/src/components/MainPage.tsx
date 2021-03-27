import * as React from 'react';
import { Component } from 'react';
import RollButton from './Button';
import Dice from "./Dice"

export interface MainPageProps {
    
}

export interface MainPageState {
    headerText : string;
    diceRoll1: number;
    diceRoll2: number;
}

class MainPage extends React.Component<MainPageProps, MainPageState> {
    constructor(props: MainPageProps) {
        super(props);
        this.state = { headerText : "", diceRoll1: 3, diceRoll2: 5 };
    }

    //how to update a setState to a child from a parent
    rollDiceOne = (roll: number) => {
        this.setState({diceRoll1: roll})
    }

    rollDiceTwo = (roll: number) => {
        this.setState({diceRoll2: roll})
    }

    render() { 
        return (
            <div>
                <p>{this.state.headerText}</p>
                <br />
                <Dice playerName="Player 1" diceRoll={this.state.diceRoll1}/>
                <Dice playerName="Player 2" diceRoll={this.state.diceRoll2}/>
                <RollButton rollDiceOne={this.rollDiceOne} rollDiceTwo={this.rollDiceTwo}/>
            </div>
        );
    }
}

export default MainPage;