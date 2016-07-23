


export default function reducer(state={
    decks: [],
    fetching: false,
    fetched: false,
    posting: false,
    posted: false,
    error: null
}, action){
    switch(action.type){
        case "FETCH_DECK":{
            return {...state, fetching: true}
        }
        case "FETCH_DECK_REJECTED":{
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }
        case "FETCH_DECK_FULFILLED":{
            return {
                ...state,
                fetching: false,
                fetched: true,
                decks: action.payload
            }
        }
        case "POST_DECK":{
            return {...state, posting: true}
        }
        case "POST_DECK_REJECTED":{
            return {
                ...state,
                posting: false,
                error: action.payload
            }
        }
        case "POST_DECK_FULFILLED":{
          console.log(`ID: ${action.payload.id}`)
            return Object.assign({}, state, {
              decks: [
                ...state.decks,
                {
                  title: action.payload.title,
                  "_id": action.payload.id,
                  posted: true,
                  posting: false
                }
              ]
            })
        }
    }
    return state;
}
