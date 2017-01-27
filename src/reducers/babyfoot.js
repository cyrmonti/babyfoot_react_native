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


        default:
            return state;
    }
};

export default babyfoots;