const initialState = {
    user : {},
    isAuthenticated : false
};

export default (state = initialState, action) => {
    switch (action.type) {
    case 'IS_AUTHENTICATED':
        return {
            isAuthenticated : true,
            user : action.user
        };
    default:
        return state;
    }
};