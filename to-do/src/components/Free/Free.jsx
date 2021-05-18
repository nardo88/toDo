import React from 'react';
import List from '../List/List';

const Free = ({data, removeTodoAC, location, removeUfkTodoAC}) => {

    


    return (
        <div >
           <List location={location} removeUfkTodoAC={removeUfkTodoAC} removeTodoAC={removeTodoAC} data={data} />
        </div>
    )
}

export default Free;