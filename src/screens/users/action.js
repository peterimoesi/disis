import axios from 'axios';
import history from '../../routes/history';
import saveForPreview from '../../actions/saveForPreview';

export function getUserDetails(id, userName) {
    return dispatch => axios.get(`/api/user/${id ? 'id' : 'userName'}/${id ? id : userName}`)
        .then(res => {
            dispatch(saveForPreview(res.data.user));
        })
        .catch(() => history.push('/'));
}

export function removeUserDetails() {
    return {
        type : 'CLEAR_PREVIEW'
    };
}