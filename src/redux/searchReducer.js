import {API_DATA, FILTER, SEARCH, SORT} from './types'

const initialState = {
    list: [],
    searchList: [],
}

const filterYear = (value, item) => {
    let n = parseInt(item['year'])
    if (value === '1950s') {
        return n < 1960
    } else if (value === '1960s') {
        return n > 1959 && n < 1970
    } else if (value === '1970s') {
        return n > 1969 && n < 1980
    } else if (value === '1980s') {
        return n > 1979 && n < 1990
    }
}


const sortByKey = (key, action) => {
    if (action === 'up') {
        return (a, b) => a[key] > b[key] ? 1 : -1
    } else {
        return (a, b) => a[key] > b[key] ? -1 : 1
    }
}

export const searchReducer = (state = initialState, action) => {

    switch (action.type) {
        case API_DATA:
            return {...state, list: action.payload, searchList: action.payload}
        case SEARCH:
            return {
                ...state, list: state.list.filter((item) => {
                    return item.brand.toLowerCase().includes(action.payload.toLowerCase())
                        || item.model.toLowerCase().includes(action.payload.toLowerCase())
                }), searchList: state.list.filter((item) => {
                    return item.brand.toLowerCase().includes(action.payload.toLowerCase())
                        || item.model.toLowerCase().includes(action.payload.toLowerCase())
                })
            }
        case FILTER:
            return {
                ...state, searchList: state.list.filter(item => {
                    if (!action.payload.year) return true
                    return filterYear(action.payload.year, item)
                }).filter(item => {
                    if (!action.payload.brand) return true
                    return action.payload.brand === item.brand
                }).filter(item => {
                    if (!action.payload.fuel) return true
                    return action.payload.fuel === item.fuel
                }).filter(item => {
                    if (!action.payload.bodyType) return true
                    return action.payload.bodyType === item.bodyType
                }),
            }
        case SORT:
            return {
                ...state, searchList: state.searchList.slice().sort(sortByKey('year', action.payload))
            }
        default:
            return state
    }
}