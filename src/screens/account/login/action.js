import axios from 'axios';
import * as Cookies from 'js-cookie';

export function userLogin (email, password) {
    return dispatch => axios.post('/api/user/login', { email, password })
        .then(res => {
            
            const d = new Date();
            d.setTime(d.getTime() + (60 * 60 * 1000 + 1));
            const userCredentials = JSON.stringify(res.data);
            Cookies.set('token', res.data.token, {
                path    : '/',
                expires : d
            });
            Cookies.set('userCredentials', userCredentials, {
                path    : '/',
                expires : d
            });

            dispatch({
                type : 'IS_AUTHENTICATED',
                user : res.data
            });
            return 200;
        })
        .catch(() => 500);
}