import {appName} from '../config'
import {OrderedMap, Record} from 'immutable'

/**
 * Constants
 * */
export const moduleName = 'people'
const prefix = `${appName}/${moduleName}`

export const ADD_SUCCESS = `${prefix}/ADD_SUCCESS`

/**
 * Reducer
 * */
const PersonRecord = Record({
    id: null,
    firstName: null,
    lastName: null,
    email: null
})
export const ReducerState = Record({
    entities: new OrderedMap({})
})

export default function reducer(state = new ReducerState(), action) {
    const {type, payload, randomId} = action

    switch (type) {
        case ADD_SUCCESS:
            console.log('payload', payload)
            return state.setIn(
                ['entities', randomId],
                new PersonRecord({...payload, id: randomId})
            )

        default:
            return state
    }
}

/**
 * Selectors
 * */


/**
 * Action Creators
 * */
export function add(values) {
    return (dispatch) => {
        dispatch({
            type: ADD_SUCCESS,
            payload: values,
            randomId: (Date.now() + Math.random()).toString()
        })
    }
}
