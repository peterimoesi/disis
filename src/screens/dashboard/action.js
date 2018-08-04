import axios from 'axios';

export function uploadImg(id, imageString, token) {
    return dispatch => axios.patch(`/api/user/profileImage/${id}`, { imageString },{
        headers: {'Authorization': token}
    })
        .then(() => {
            dispatch({
                type : 'PICTURE_UPLOAD'
            });
        })
        .catch(() => 500);
}

export function getUserImage(id) {
    return dispatch => axios.get(`/api/user/id/${id}`)
        .then(res => {
            dispatch({
                type : 'PROFILE_PICTURE_GET'
            });
            return res.data.user.image;
        })
        .catch(() => '');
}
