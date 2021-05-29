import {API_DATA, FILTER, SEARCH, SORT} from './types'

export function searchAction(payload) {
    return {
        type: SEARCH,
        payload
    }
}

export function filterAction(payload) {
    return {
        type: FILTER,
        payload
    }
}

export function sortAction(payload) {
    return {
        type: SORT,
        payload
    }
}

export function apiAction() {
    return async dispatch => {
        try {
            const json = await require('../data.json')
            dispatch({
                type: API_DATA,
                payload: json.objects
            })
        } catch (error) {
            console.error(error)
        }
    }
}
