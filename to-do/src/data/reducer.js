const REMOVE_TODO_FREE = 'REMOVE_TODO_FREE';

const defaultState = {
    free: {
        data: [
            { id: 1, title: 'Заголовок дела 1', description: 'Описание дела 1' },
            { id: 2, title: 'Заголовок дела 2', description: 'Описание дела 2' },
            { id: 3, title: 'Заголовок дела 3', description: 'Описание дела 3' },
            { id: 4, title: 'Заголовок дела 4', description: 'Описание дела 4' },
        ],
        caption: 'Фриланс'
    },

    ufk: {
        data: [
            { id: 1, title: 'Заголовок дела 1', description: 'Описание дела 1' },
      
        ],
        caption: 'УФК'
    }
}

const reducer = (state = defaultState, action) => {
    // debugger
    switch (action.type){
        case REMOVE_TODO_FREE: 
            const newState = {...state};
            newState.free = {...state.free};
            newState.free.data = state.free.data.filter(item => item.id !== action.id);
            return newState;
        default:
            return state;
    }
}


export const removeTodoAC = id => {
    return {
        type: REMOVE_TODO_FREE,
        id
    }
}

export default reducer;