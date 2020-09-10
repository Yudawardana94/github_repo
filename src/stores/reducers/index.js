const initialState = {}

export default function Reducer (state = initialState, action) {
    switch (action.type) {
        case 'GET_USER_REPO':
            return {...state, userRepo: [...action.payload]}
            break;
    
        default:
            return state
            break;
    }
}