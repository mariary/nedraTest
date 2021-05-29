import React from 'react'
import s from './ItemFilter.module.css'

export const ItemFilter = (props) => {

    return (
        <div className={s.item}>
            <p className={s.title}>{props.title}:</p>
            {props.name === 'year' ?
                <div className={s.btn_wrapper}>
                    <button onClick={props.sort} value={'up'} className={s.btn_up+' '+s.btn}></button>
                    <button onClick={props.sort} value={'down'} className={s.btn_down+' '+s.btn}></button>
                </div>
                :
                <div></div>
            }
            <div className={s[props.style]}>
                {props.arr.map(value =>
                    <div className={s.input_wrapper}>
                        <label>{value}</label>
                        <input type="radio" name={props.name} value={value}/>
                    </div>)}

            </div>
        </div>
    )
}