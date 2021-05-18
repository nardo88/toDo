import React from 'react';
import ListItem from '../ListItem/ListItem';


const List = ({data, removeTodoAC, location, removeUfkTodoAC}) => {
    let listData;
    if (data){
        listData = data.data.length ? data.data.map(item => <ListItem removeUfkTodoAC={removeUfkTodoAC} location={location} removeTodoAC={removeTodoAC} className="todo__item" key={item.id} data={item} />) : ''

    } else {
        listData = ''
    }

    return (
        <div className="todo">
           <h2 className="todo__caption">{data ? data.caption : ''}</h2> 

            {listData.length ?
            <ul className="todo__list">
                {listData}
            </ul> :

            <div className="todo__null">Данных нет</div>}

        </div>
    )
}


export default List;