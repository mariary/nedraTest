import React from 'react'
import s from './Item.module.css'

export const Item = (props) => {
    const logo = {
        'DeLorean': 'https://img.pngio.com/delorean-dmc-logo-bedeutung-zeichen-logo-png-delorean-motor-company-png-3840_2160.png',
        'Aston Martin': 'https://upload.wikimedia.org/wikipedia/en/b/bd/Aston_Martin_Lagonda_brand_logo.png',
        'Mustang': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO--K6rPgtw0Go9rUEg8zQ3H7_QGXjXfi5K8ZvDvu2PbOeHYvxWEe9XE5YicxTrg_jk1c&usqp=CAU',
        'Ford': 'https://logos-world.net/wp-content/uploads/2021/03/Ford-Logo-1917-1927.png',
        'Bentley Motors': 'https://purepng.com/public/uploads/large/purepng.com-bentley-motors-logobentleybentley-motorsbritishmanufacturerluxury-carsloho-1701527414234rxmpt.png',
        "Dodge Challenger":"https://www.schwinds-classicpartsstore.de/images/product_images/original_images/1970_Dodge_ChallengerArmaEmblem_b.jpg"
    }
    return (
        <div className={s.main}>
            <img src={logo[`${props.info.brand}`]} alt="" className={s.logo}/>
            <p className={s.brand}>{' ' + props.info.brand}</p>
            <p className={s.model}>{' ' + props.info.model}</p>
            <img src={props.info.img} alt="" className={s.img}/>
            <div className={s.wrapper}>
                <div className={s.info1}>
                    <p className={s.fuel}><span>Fuel:</span>{' ' + props.info.fuel}</p>
                    <p className={s.bodyType}><span>Body type:</span>{' ' + props.info.bodyType}</p>
                    <p className={s.year}><span>release :</span>{' ' + props.info.year}</p>
                </div>
                <p className={s.price}>{props.info.price + '$'}</p>
            </div>
        </div>
    )
}