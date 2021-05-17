import React from 'react';
import ListItem from '../ListItem/ListItem';


const List = ({data}) => {
    

    const listData = data.length ? data.map(item => <ListItem className="todo__item" key={item.id} data={item} />) : ''

    return (

        listData.length ?
        <ul className="todo__list">
            {listData}
        </ul> :

        <div className="todo__null">Данных нет</div>
    )
}

export default List;