import cloneDeep from 'lodash/cloneDeep';


const initialData = {
    data : {
        firstName : '',
        lastName : '',
        experience : [],
        education : [],
        skills : [],
        interest : [],
        languages : [],
        social : [],
        defaultTheme : {}
    }
};

export default (state = cloneDeep(initialData), action) => {
    switch (action.type) {
    case 'SAVE_FOR_PREVIEW':
        return {
            data : action.data
        };
    case 'CLEAR_PREVIEW':
        return {
            data : initialData
        };
    default:
        return state;
    }
};