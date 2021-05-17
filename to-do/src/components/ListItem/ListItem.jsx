import React from 'react';

const ListItem = ({data, removeTodoAC, location}) => {
    function removeItem (e) {
        if (location.pathname === '/free' || location.pathname === '/'){
            removeTodoAC(+e.target.dataset.id);
        }
        if (location.pathname === '/ufk'){
            console.log('Пиши новый actioncreater');
        }
    }

    return (
        <li className="todo__item">
            <h4 className="todo__title">{data.title}</h4>
            <div className="todo__controls">
                <button data-id={data.id} onClick={removeItem} className="todo__btn delete" title="Удалить"></button>
                <button className="todo__btn rewraite" title="Редактировать"></button>
                <button className="todo__btn open" title="Открыть"></button>
            </div>
        </li>
    )
}

export default ListItem;