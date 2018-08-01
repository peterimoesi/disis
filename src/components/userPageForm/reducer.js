const initialData = {
    data : {
        firstName : '',
        lastName : '',
        experience : [],
        education : [],
        skills : [],
        social : [],
        defaultTheme : {}
    }
};

export default (state = initialData, action) => {
    switch (action.type) {
    case 'SAVE_FOR_PREVIEW':
        return {
            data : action.data
        };
    case 'CLEAR_PREVIEW':
        return {
            data : {
                firstName : '',
                lastName : '',
                experience : [],
                education : [],
                skills : [],
                social : [],
                defaultTheme : {}
            }
        };
    default:
        return state;
    }
};