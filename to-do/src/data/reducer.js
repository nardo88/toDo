const defaultState = {
    free: [
        { id: 1, title: 'Заголовок дела 1', description: 'Описание дела 1' },
        { id: 2, title: 'Заголовок дела 2', description: 'Описание дела 2' },
        { id: 3, title: 'Заголовок дела 3', description: 'Описание дела 3' },
        { id: 4, title: 'Заголовок дела 4', description: 'Описание дела 4' },
    ],

    ufk: []
}

const reducer = (state = defaultState, action) => {
    switch (action.type){
        default:
            return state;
    }
}

export default reducer;