import React from 'react';
import Deck from './deck';
import AddDeck from './AddDeck';
import { connect } from "react-redux";
import {fetchDecks, addDeck, deleteDeck, renameDeck} from '../actions/DeckActions';

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
      let title = prompt("Title?");
      if (title != null && title.length > 0){
        this.props.dispatch(addDeck(title));
      }
    }

    openMenu(id){
      if (currentMenu){
        document.getElementById(currentMenu).style.display = "none";
      };
      currentMenu = id+"--menu";
      document.getElementById(id+"--menu").style.display = "block";
    };

    closeMenu(id){
      if (currentMenu){
        currentMenu = "";
      }
      document.getElementById(id+"--menu").style.display = "none";
    }

    deleteDeck(id){
      currentMenu = ""
      console.log(`delete deck: ${id} event triggered`);
      this.props.dispatch(deleteDeck(id));
    }

    renameDeck(id){
      console.log(`rename deck: ${id} event triggered`);
      //todo: rename deck actions
      let title = prompt("Title?");
      if (title != null && title.length > 0){
        this.props.dispatch(renameDeck(title, id));
      }

    }

    openEditor(id){
      console.log(`open editor for deck: ${id} event triggered`);
      //todo: open deck editor actions
    }

    render() {

        const deckList = this.props.decks.decks.map((deck) => {
            return (
                <Deck openMenu={this.openMenu.bind(this)}
                      closeMenu={this.closeMenu.bind(this)}
                      deleteDeck={this.deleteDeck.bind(this)}
                      renameDeck={this.renameDeck.bind(this)}
                      openEditor={this.openEditor.bind(this)}
                      key={deck._id}
                      deck={deck}
                />
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
