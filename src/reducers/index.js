import { combineReducers } from 'redux';

import previewData from '../components/userPageForm/reducer';

const appReducer = combineReducers({
    previewData
});

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        return appReducer(undefined, action);
    }
    return appReducer(state, action);
};

export default rootReducer;