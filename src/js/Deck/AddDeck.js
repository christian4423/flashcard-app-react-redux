import React from 'react';
import {render} from 'react-dom';



export default class AddDeck extends React.Component {
    render() {

        return (
            <div className="new-folder row">
                <div className="col-xs-offset-9 col-xs-3 col-sm-offset-10 col-sm-2 col-md-2 col-lg-2">
                    <span onClick={this.props.addDeck} className="add-new-folder_btn">+</span>
                </div>
            </div>
        );
    };
};
