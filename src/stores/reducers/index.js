const initialState = {
    userRepo: [],
    isEmpty: {status: true, message: "search to get user repository"}
}

export default function Reducer (state = initialState, {type, payload}) {
    switch (type) {
        case 'GET_USER_REPO':
            return {
                ...state, 
                userRepo: [...payload.userRepos], 
                isempty: payload.isEmpty
            }
        case 'SET_EMPTY_RESULT': 
            return {
                ...state, 
                isEmpty: payload, 
                userRepo: []
            }
        case 'SET_USER_NOT_FOUND': 
            return {
                ...state, 
                isEmpty: payload, 
                userRepo: []
            }
    
        default:
            return state
            break;
    }
}