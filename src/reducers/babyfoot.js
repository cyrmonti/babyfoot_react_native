const INTIAL_STATE = [
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
];



const babyfoots = (state = INTIAL_STATE, action) => {
    switch(action.type) {
    	case 'ADD_BABYFOOT':
            return [...state, {
                id: action.payload.id,
                name: action.payload.name
            }];

        case 'DELETE_BABYFOOT':
            return state.filter(babyfoot => {
                return action.payload.id !== babyfoot.id
			});

        default:
            return state;
    }
};

export default babyfoots;