import React from 'react';
import {render} from 'react-dom';
import DeckMenu from './DeckMenu'


const Deck = ({deck, openMenu, closeMenu, renameDeck, deleteDeck, openEditor}) =>

    <div className="folder-column col-xs-12 col-sm-4 col-md-4 col-lg-3">
    <div className="folder-select_btn" onClick={() => openMenu(deck._id)} data-id={deck._id}></div>
    <DeckMenu closeMenu={closeMenu}
              renameDeck={renameDeck}
              deleteDeck={deleteDeck}
              openEditor={openEditor}
              deck={deck}
              key={deck._id + "--menu"}
    />
        <div className="folder-item" id={deck._id}>
            <div className="folder-content">
                <div className="folder-head">
                    <h2>{deck.title}</h2>
                </div>
            </div>
            <div className="folder-item left-45"></div>
            <div className="folder-item right-45"></div>
        </div>
    </div>

export default Deck;


//deck menu ready when ready to tackle,

//
