import axios from 'axios';

export function uploadImg(id, data, token) {
    return dispatch => axios.patch(`/api/user/profileImage/${id}`, data,{
        headers: {'Authorization': token}
    })
        .then((res) => {
            console.log(res);
            dispatch({
                type : 'ULOAD_PIC'
            });
        });
}