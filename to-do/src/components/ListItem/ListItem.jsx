import React from 'react';

const ListItem = ({data}) => {
    return (
        <li className="todo__item">
            <h4 className="todo__title">{data.title}</h4>
            <div className="todo__controls">
                <button className="todo__btn delete" title="Удалить"></button>
                <button className="todo__btn rewraite" title="Редактировать"></button>
                <button className="todo__btn open" title="Открыть"></button>
            </div>
        </li>
    )
}

export default ListItem;