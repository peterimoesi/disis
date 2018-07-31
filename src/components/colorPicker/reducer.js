const initialColors = {};

export default (state=initialColors, action) => {
    switch (action.type) {
    case 'ADD_COLORS':
        return {
            ...state,
            ...action.colors
        };
    case 'UPDATE_COLORS':
        return {
            ...state,
            [action.color] : action.value
        };
    default:
        return state;
    }
};