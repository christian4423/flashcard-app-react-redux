

import axios from "axios";
import Guid  from 'guid';

var guid = Guid.create();

export function fetchDecks() {
    return function (dispatch) {
        axios.get('http://localhost:4000/deck/getDecks')
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
    return function (dispatch) {
        axios.post('deck/add',{
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

export function deleteDeck(id) {
    return function (dispatch) {
        axios.post(`/deck/delete?id=${id}`,{
          type: "DELETE_DECK",
          payload: {
            id: id
          }
        })
        .then((responce) => {
            dispatch({
                type: "DELETE_DECK_FULFILLED",
                payload: {
                  responce: responce,
                  id: id
                }
            })
        })
        .catch((err) => {
            dispatch({
                type: "DELETE_DECK_REJECTED",
                payload: err
            })
        })
    }
};
