export const deleteBabyfoot = (id) => {
    return {
        type: 'DELETE_BABYFOOT',
        payload: { id }
    }
};

export const addBabyfoot = (name) => {
    return {
        type: 'ADD_BABYFOOT',
        payload: { name }
    }
};