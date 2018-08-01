import axios from 'axios';
import history from '../../routes/history';
import saveForPreview from '../../actions/saveForPreview';

export function getUserDetails(id) {
    return dispatch => axios.get(`/api/user/${id}`)
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