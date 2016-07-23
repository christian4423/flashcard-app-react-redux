import React from 'react';
import Deck from './deck';
import AddDeck from './AddDeck';
import { connect } from "react-redux";
import {fetchDecks, addDeck} from '../actions/DeckActions';

var currentMenu = ""

@connect((store) => {
    return {
        decks: store.decks,
        deckFetched: store.decks.fetched
    }
})


export default class DeckContainer extends React.Component {
    componentWillMount(){
        this.props.dispatch(fetchDecks());
    }

    addDeck(e){
      var title = prompt("Title?");
      if (title != null && title.length > 0){
        this.props.dispatch(addDeck(title));
      }
    }

    openMenu(id){
      if (currentMenu){
        document.getElementById(currentMenu).style.display = "none";
      }
      currentMenu = id+"--menu"
      document.getElementById(id+"--menu").style.display = "block";
    }

    render() {

        const deckList = this.props.decks.decks.map((deck) => {
            return (
                <Deck openMenu={this.openMenu.bind(this)} key={deck._id} deck={deck}  />
            );
        });

        return (
             <div className="col-xs-offset-1 col-xs-10 col-sm-offset-0 col-sm-12 col-md-12 col-lg-12">
                <div className="folder-container">
                    <div className="folders row">
                        {deckList}
                    </div>
                    <AddDeck addDeck={this.addDeck.bind(this) } />
                </div>
            </div>

        )
    }
}
