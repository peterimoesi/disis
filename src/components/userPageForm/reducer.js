const initialData = {
    data : {
        experience : [],
        education : [],
        skills : [],
        social : []
    }
};

export default (state = initialData, action) => {
    switch (action.type) {
    case 'SAVE_FOR_PREVIEW':
        return {
            data : action.data
        };
    default:
        return state;
    }
};