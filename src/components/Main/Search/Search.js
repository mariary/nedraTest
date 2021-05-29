import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {apiAction, searchAction} from '../../../redux/actions'
import s from './Search.module.css'

export const Search = () => {

    const [search, setSearch] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        apiData()
    }, [])

    const updateSearch = (e) => {
        setSearch(e.target.value)
        apiData()
    }

    const searchCars = (e) => {
        if (search !== '') {
            e.preventDefault()
            dispatch(searchAction(search))
            setSearch('')
        }
    }

    const apiData = () => {
        dispatch(apiAction())
    }

    return (
        <div className={s.main}>
            <form onSubmit={searchCars} className={s.form}>
                <input type="text" value={search} onChange={updateSearch} className={s.input}/>
                <button onSubmit={searchCars} className={s.btn}></button>
            </form>
            <button onClick={apiData} className={s.btn_reload}></button>
        </div>
    )
}
