import { createStore } from 'redux';

const initialState = {
    firstName: ''
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'UPDATE_NAME':
            return action.data ? {
                firstName: action.data.firstName
            } : state;
        default:
            return state;
    }
}

export const globalStore = createStore(reducer);