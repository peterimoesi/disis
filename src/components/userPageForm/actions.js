import axios from 'axios';

import { setUserCredentials } from '../../actions/setUserCredentials';

export function updateUser(data, id, token) {
    return dispatch => axios.patch(`/api/user/update/${id}`, data, {
        headers: {'Authorization': token}
    })
        .then(res => {
            setUserCredentials({ ...res.data, token });
            dispatch({
                type : 'IS_AUTHENTICATED',
                user : res.data
            });
            return 200;
        })
        .catch(() => 500);
}

