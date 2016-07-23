

import axios from "axios";
import Guid  from 'guid';

var guid = Guid.create();

export function fetchDecks() {
    return function (dispatch) {
        axios.get('http://localhost:4000/getDecks')
            .then((responce) => {
                dispatch({
                    type: "FETCH_DECK_FULFILLED",
                    payload: responce.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: "FETCH_DECK_REJECTED",
                    payload: err
                })
            })
    }
};

export function addDeck(title) {
  let id = new Guid.create().value;
  console.log(id)
    return function (dispatch) {
        axios.post('http://localhost:4000/add',{
          type: 'POST_DECK',
          title: title,
          _id:id
        })
        .then((responce) => {
            dispatch({
                type: "POST_DECK_FULFILLED",
                payload: {
                  responce:responce.data,
                  title: title,
                  id: id
                }
            })
        })
        .catch((err) => {
            dispatch({
                type: "POST_DECK_REJECTED",
                payload: err
            })
        })
    }
};
