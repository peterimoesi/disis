import * as Cookies from 'js-cookie';
import history from '../routes/history';

export function setUserCredentials (data) {
    const d = new Date();
    d.setTime(d.getTime() + (60 * 60 * 1000 + 1));
    const userCredentials = JSON.stringify(data);
    Cookies.set('token', data.token, {
        path    : '/',
        expires : d
    });
    console.log(userCredentials);
    Cookies.set('userCredentials', userCredentials, {
        path    : '/',
        expires : d
    });
}

export function removeUserCredentials () {
    return dispatch => {
        Cookies.remove('token');
        Cookies.remove('userCredentials');
        dispatch({
            type : 'USER_LOGOUT'
        });
        history.push('/');
    };
    
}

