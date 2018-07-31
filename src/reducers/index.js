import { combineReducers } from 'redux';

import previewData from '../components/userPageForm/reducer';
import themeColors from '../components/colorPicker/reducer';
import userAuthentication from '../screens/account/reducer';

const appReducer = combineReducers({
    previewData,
    themeColors,
    userAuthentication
});

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        return appReducer(undefined, action);
    }
    return appReducer(state, action);
};

export default rootReducer;