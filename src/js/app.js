
import React from 'react';
import {render} from 'react-dom';
import { Provider } from "react-redux";


import store from './redux';
import DeckContainer from './Deck/DeckContainer';
// import Deck from './Deck/Deck';
// import DeckMenu from './Deck/DeckMenu';
// import AddDeck from './Deck/AddDeck';



const app = document.getElementById('app');


class App extends React.Component {
    render() {
        return (
            <div className="contact-component">
                <h1 className="__title">Flashcard App with React</h1>
                <DeckContainer />
            </div>
        );
    };
};



render(<Provider store={store}> 
            <App />
</Provider>, app);