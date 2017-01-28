const INITIAL_STATE = [
    {
        id: 1,
        name: "PSG"
    },
    {
        id: 2,
        name: "Chelsea"
    },
    {
        id: 3,
        name: "Real Madrid"
    },
    {
        id: 4,
        name: "FC Barcelona"
    },
    {
        id: 5,
        name: "Manchester United"
    },
    {
        id: 6,
        name: "Milan AC"
    },
    {
        id: 7,
        name: "Livepool F.C"
    },
    {
        id: 8,
        name: "Athlético Madrid"
    },
];


let lastId = INITIAL_STATE[INITIAL_STATE.length - 1].id + 1;

const babyfootReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'ADD_BABYFOOT':
            return [...state, {
                id: lastId++,
                name: action.payload.name
            }];

        case 'DELETE_BABYFOOT':
            return state.filter(babyfoot => {
                return action.payload.id !== babyfoot.id
            });

        case 'RESET_LIST_BABYFOOT':
            return INITIAL_STATE;
        default:
            return state;
    }
};


export default babyfootReducer;