import React from 'react';
import List from '../List/List';

const Free = ({data, removeTodoAC, location}) => {

    


    return (
        <div >
           <List location={location} removeTodoAC={removeTodoAC} data={data} />
        </div>
    )
}

export default Free;