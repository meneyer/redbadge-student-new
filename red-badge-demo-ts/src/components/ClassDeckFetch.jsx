import React, { Component } from 'react';

class ClassDeckFetch extends Component{
    constructor(props){
        super(props);
        this.state = {deckID: "", cardImage: ""}
    }

    fetchDeck(){
        //What's the url that we are fetching?
        //Store the data from the fetch
        const url= "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"

        fetch(url)
        .then(res => res.json())
        // .then(json => console.log(json));
        .then(json => this.setState({ deckID: json.deck_id})) //left side (DeckID) is what we created on line 6, the right side (json.deck_id) is what we got back from the fetch;
    }

    fetchCard(){
        const url = `https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=2`
        fetch(url)
        .then(res => res.json())
        // .then(json => console.log(json));
        .then(json => this.setState({cardImage: json.cards[0].image}));
    }

    componentDidMount() {
        this.fetchDeck();
    }

    componentDidUpdate(prevProps, prevState) {
        // debugger
        if(prevState.deckID !== this.state.deckID){
            this.fetchCard()
        }
    }

    render(){
        return(
            <div>                
                <img src={this.state.cardImage} />
            </div>
        )
    }
}

export default ClassDeckFetch