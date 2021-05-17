import React from 'react';
import ListItem from '../ListItem/ListItem';


const List = ({data, removeTodoAC, location}) => {
    
    const listData = data.data.length ? data.data.map(item => <ListItem location={location} removeTodoAC={removeTodoAC} className="todo__item" key={item.id} data={item} />) : ''

    return (
        <div className="todo">
           <h2 className="todo__caption">{data.caption}</h2> 

            {listData.length ?
            <ul className="todo__list">
                {listData}
            </ul> :

            <div className="todo__null">Данных нет</div>}

        </div>
    )
}


export default List;