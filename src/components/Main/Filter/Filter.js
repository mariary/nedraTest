import React from 'react'
import {filterAction, sortAction} from '../../../redux/actions'
import {useDispatch} from 'react-redux'
import s from './Filter.module.css'
import {ItemFilter} from './ItemFilter/ItemFilter'

export const Filter = () => {

    const dispatch = useDispatch()
    const filter = (e) => {
        const {name, value} = e.target
        dispatch(filterAction({name, value}))
    }
    const sort = (e) => {
        e.preventDefault()
        const value = e.target.value
        dispatch(sortAction(value))
    }

    const filterData = [
        {
            title: 'Brand',
            name: 'brand',
            arr: ['DeLorean', 'Aston Martin', 'Mustang', 'Ford', 'Bentley Motors', 'Dodge Challenger'],
            style: 'form_column'
        }, {
            title: 'Year',
            name: 'year',
            arr: ['1950s', '1960s', '1970s', '1980s'],
            style: 'form_row'
        }, {
            title: 'Fuel',
            name: 'fuel',
            arr: ['diesel', 'petrol', 'hybrid', 'electric'],
            style: 'form_row'
        }, {
            title: 'Body type',
            name: 'bodyType',
            arr: ['Hatchback', 'Sedan', 'MPV', 'SUV', 'Cabrio', 'Pickup', 'Estate'],
            style: 'form_row'
        }
    ]


    return (
        <div className={s.main}>
            <form className={s.form} onChange={filter}>
                {filterData.map(item => <ItemFilter sort={sort} title={item.title} name={item.name} arr={item.arr} style={item.style}/>)}
            </form>

        </div>
    )
}