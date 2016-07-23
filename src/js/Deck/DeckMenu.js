import React from 'react';
import {render} from 'react-dom';



const DeckMenu = ({deck}) =>
    <div className="folder-menu active" id={deck._id + "--menu"}>
        <div className="row">
            <div className="col-xs-12 folder-menu-col" data-id={deck._id}>
                <div className="folder-menu-option-container">
                    <span className="folder-menu-option">EDITOR</span>
                </div>
            </div>
            <div className="col-xs-12 folder-menu-col" data-id={deck._id}>
                <div className="folder-menu-option-container" >
                    <span className="folder-menu-option" >RENAME</span>
                </div>
            </div>
            <div className="col-xs-12 folder-menu-col" data-id={deck._id}>
                <div className="folder-menu-option-container" >
                    <span className="folder-menu-option">DELETE</span>
                </div>
            </div>
            <div className="col-xs-12 folder-menu-col" data-id={deck._id +'--menu'}>
                <div className="folder-menu-option-container last">
                    <span className="folder-menu-option" >CLOSE</span>
                </div>
            </div>
        </div>
    </div>

export default DeckMenu;
