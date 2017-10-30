import {appName} from '../config'
import {Record, OrderedMap} from 'immutable'
import {reset} from 'redux-form'
import {put, call, takeEvery, all} from 'redux-saga/effects'
import firebase from 'firebase'
import {createSelector} from 'reselect'
import {fbToEntities} from './utils'

/**
 * Constants
 * */
export const moduleName = 'people'
const prefix = `${appName}/${moduleName}`
export const ADD_PERSON_REQUEST = `${prefix}/ADD_PERSON_REQUEST`
export const ADD_PERSON_SUCCESS = `${prefix}/ADD_PERSON_SUCCESS`
export const ADD_PERSON_START = `${prefix}/ADD_PERSON_START`
export const FETCH_ALL_REQUEST = `${prefix}/FETCH_ALL_REQUEST`
export const FETCH_ALL_START = `${prefix}/FETCH_ALL_START`
export const FETCH_ALL_SUCCESS = `${prefix}/FETCH_ALL_SUCCESS`


/**
 * Reducer
 * */
const ReducerState = Record({
    entities: new OrderedMap({}),
    loading: false,
    loaded: false
})

const PersonRecord = Record({
    uid: null,
    firstName: null,
    lastName: null,
    email: null
})

export default function reducer(state = new ReducerState(), action) {
    const {type, payload} = action

    switch (type) {
        case FETCH_ALL_SUCCESS:
            return state
                .set('loading', false)
                .set('loaded', true)
                .set('entities', fbToEntities(payload, PersonRecord))

        case ADD_PERSON_SUCCESS:
            return state.setIn(['entities', payload.uid], new PersonRecord(payload))

        default:
            return state
    }
}
/**
 * Selectors
 * */
export const stateSelector = state => state[moduleName]
export const peopleListSelector = createSelector(stateSelector, state => state.entities.valueSeq().toArray())

/**
 * Action Creators
 * */

export function addPerson(person) {
    return {
        type: ADD_PERSON_REQUEST,
        payload: { person }
    }
}

export function fetchAll() {
    return {
        type: FETCH_ALL_REQUEST
    }
}

/**
 *Sagas
 * */

export function * addPersonSaga(action) {

    yield put({
        type: ADD_PERSON_START,
        payload: { ...action.payload.person }
    })

    const peopleRef = firebase.database().ref('people')

    const { key } = yield call([peopleRef, peopleRef.push], action.payload.person)

    yield put({
        type: ADD_PERSON_SUCCESS,
        payload: { uid: key , ...action.payload.person }
    })

    yield put(reset('person'))
}

export function * fetchAllSaga() {
    yield put({
        type: FETCH_ALL_START
    })

    const peopleRef = firebase.database().ref('people')

    const snapshot = yield call([peopleRef, peopleRef.once], 'value')

    yield put({
        type: FETCH_ALL_SUCCESS,
        payload: snapshot.val()
    })

}

export function * saga() {
    yield all([
        takeEvery(ADD_PERSON_REQUEST, addPersonSaga),
        takeEvery(FETCH_ALL_REQUEST, fetchAllSaga)
    ])
}