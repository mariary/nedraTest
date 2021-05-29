import React from 'react'
import {filterAction, sortAction} from '../../../redux/actions'
import {useDispatch} from 'react-redux'
import s from './Filter.module.css'
import {ItemFilter} from './ItemFilter/ItemFilter'

export const Filter = () => {

    const dispatch = useDispatch()

    const filter = (e) => {
        let formElement = document.getElementById('form')
        let formData = new FormData(formElement)
        let form = {
            brand: formData.getAll(['brand']) !== [] ? formData.getAll('brand')[0] : null,
            year: formData.getAll('year') !== [] ? formData.getAll('year')[0] : null,
            fuel: formData.getAll('fuel') !== [] ? formData.getAll('fuel')[0] : null,
            bodyType: formData.getAll('bodyType') !== [] ? formData.getAll('bodyType')[0] : null,
        }
        dispatch(filterAction(form))
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
            style: 'form_column',
            id: 1
        }, {
            title: 'Year',
            name: 'year',
            arr: ['1950s', '1960s', '1970s', '1980s'],
            style: 'form_row',
            id: 2
        }, {
            title: 'Fuel',
            name: 'fuel',
            arr: ['diesel', 'petrol', 'hybrid', 'electric'],
            style: 'form_row',
            id: 3
        }, {
            title: 'Body type',
            name: 'bodyType',
            arr: ['Hatchback', 'Sedan', 'MPV', 'SUV', 'Cabrio', 'Pickup', 'Estate'],
            style: 'form_row',
            id: 4
        }
    ]

    return (
        <div className={s.main}>
            <form id={'form'} className={s.form} onChange={filter}>
                {filterData.map(item => <ItemFilter sort={sort} title={item.title} name={item.name} arr={item.arr}
                                                    style={item.style} filter={filter} key={item.id}/>)}
            </form>

        </div>
    )
}