import {
    FIND_ALL_CONTACT, FIND_ALL_CONTACT_SUCCESS, FIND_ALL_CONTACT_ERROR
} from '../action/contact'

import { put, takeLatest } from 'redux-saga/effects';




function* findAllContact() {
    try {
        const json = yield fetch('https://simple-contact-crud.herokuapp.com/contact').then(response => {
            if (!response.ok) {
                throw new Error(response.statusText || 'Unknown Error')
            }
            return response.json();
        })
        yield put({
            type: FIND_ALL_CONTACT_SUCCESS,
            data: json.data,
        });
    } catch (error) {
        yield put({
            type: FIND_ALL_CONTACT_ERROR,
            error: error
        })
    }
}

export function* watchFindAllContact() {
    yield takeLatest(FIND_ALL_CONTACT, findAllContact);
}
