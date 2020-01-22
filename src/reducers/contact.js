import {
    FIND_ALL_CONTACT, FIND_ALL_CONTACT_SUCCESS, FIND_ALL_CONTACT_ERROR
} from '../action/contact'


export function findAllContact(state = { data: [], loading: false }, action) {
    switch (action.type) {
        case FIND_ALL_CONTACT:
            return {
                ...state,
                data: [],
                loading: true
            };
        case FIND_ALL_CONTACT_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false
            };
        case FIND_ALL_CONTACT_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
}