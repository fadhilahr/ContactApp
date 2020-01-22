import { all, fork } from 'redux-saga/effects'
import { watchFindAllContact } from './contact'

export default function* sagas() {
    yield all([
        fork(watchFindAllContact),

    ]);
};