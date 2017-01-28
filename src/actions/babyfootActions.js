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

export const resetBabyfootList = () => {
    return {
        type: 'RESET_LIST_BABYFOOT',
        payload: null
    }
};