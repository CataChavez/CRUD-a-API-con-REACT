import {
    FETCH_USERS_START,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    DELETE_USER_FAILURE,
    DELETE_USER_SUCCESS,
    DELETE_USER_START,
} from './constants';

//fetch
export const fetchUsersStart = () => ({
    type: FETCH_USERS_START,
});

export const fetchUsersSucces = (users) => ({
    type: FETCH_USERS_SUCCESS,
    payload: users,
});

export const fetchUsersFailure = (errorMessage) => ({
    type: FETCH_USERS_FAILURE,
    payload: errorMessage,
});

//delete
export const deleteUserStart = () => ({
    type: DELETE_USER_START
})

export const deleteUserSuccess = (id) => ({
    type: DELETE_USER_SUCCESS,
    payload: id,
})

export const deleteUserFailure = (errorMessage) => ({
    type: DELETE_USER_FAILURE,
    payload: errorMessage,
})


