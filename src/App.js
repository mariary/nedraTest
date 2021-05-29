import './App.css'
import {Search} from './components/Main/Search/Search'
import {Filter} from './components/Main/Filter/Filter'
import React from 'react'
import {Item} from './components/Main/Item/Item'
import {useSelector} from 'react-redux'

function App() {
    const searchList = useSelector(state => state.search.searchList)
    return (
        <div className="App">
            <Search/>
            <div className='wrapper'>
                <div className="content">
                    {searchList.map(item => <Item info={item} key={item.id}/>)}
                </div>
                <Filter/>
            </div>
        </div>
    )
}

export default App
