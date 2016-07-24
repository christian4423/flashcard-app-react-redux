export default function reducer(state = {
    decks: [],
    fetching: false,
    fetched: false,
    posting: false,
    posted: false,
    updating: false,
    updated: false,
    deleted: false,
    deleting: false,
    error: null
}, action) {
    switch (action.type) {
        case "FETCH_DECK":
            {
                return {...state,
                    fetching: true,
                    fetched: false,
                }
            }
        case "FETCH_DECK_REJECTED":
            {
                return {
                    ...state,
                    fetching: false,
                    fetched: false,
                    error: action.payload
                }
            }
        case "FETCH_DECK_FULFILLED":
            {
                return {
                    ...state,
                    fetching: false,
                    fetched: true,
                    decks: action.payload
                }
            }
        case "POST_DECK":
            {
                return {...state,
                    posting: true,
                    posted: false
                }
            }
        case "POST_DECK_REJECTED":
            {
                return {
                    ...state,
                    posting: false,
                    posted: false,
                    error: action.payload
                }
            }
        case "POST_DECK_FULFILLED":
            {
                return Object.assign({}, state, {
                    decks: [
                        ...state.decks, {
                            title: action.payload.title,
                            "_id": action.payload.id,
                            posted: true,
                            posting: false
                        }
                    ]
                })
            }
        case "UPDATE_DECK":
            {
                return {...state,
                    updating: true,
                    updated: false
                }
            }
        case "UPDATE_DECK_REJECTED":
            {
                return {
                    ...state,
                    updating: false,
                    updated: false,
                    error: action.payload
                }
            }
        case "UPDATE_DECK_FULFILLED":
            {
                var index = state.decks.map((x) => {
                    return x._id;
                }).indexOf(action.payload._id);
                return Object.assign({}, state, {
                    decks: [
                        ...state.decks.slice(0, index),
                        Object.assign({}, state.decks[index], {title: action.payload.title}),
                        ...state.decks.slice(index + 1)
                    ],
                    updated: true,
                    updating: false
                });
            }
        case "DELETE_DECK":
            {
                return {
                    ...state,
                    deleting: true,
                    deleted: false
                }
            }
        case "DELETE_DECK_REJECTED":
            {
                return {
                    ...state,
                    deleted: false,
                    deleting: false,
                    error: action.payload
                }
            }
        case "DELETE_DECK_FULFILLED":
            {
                var elementPos = state.decks.map((x) => {
                    return x._id;
                }).indexOf(action.payload.id);
                return {
                    decks: [
                        ...state.decks.slice(0, elementPos),
                        ...state.decks.slice(elementPos + 1)
                    ],
                    deleted: true,
                    deleting: false
                }
            }
    }
    return state;
}
