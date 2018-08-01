import axios from 'axios';

import { setUserCredentials } from '../../../actions/setUserCredentials';

export function userLogin (email, password) {
    return dispatch => axios.post('/api/user/login', { email, password })
        .then(res => {
            setUserCredentials(res.data);
            dispatch({
                type : 'IS_AUTHENTICATED',
                user : res.data
            });
            return 200;
        })
        .catch(() => 500);
}
