import axios from 'axios';

import { setUserCredentials } from '../../../actions/setUserCredentials';

export function userRegister (data) {
    return dispatch => axios.post('/api/user/register', data)
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
