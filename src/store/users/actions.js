import {
    FETCH_USERS_START,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    DELETE_USER_FAILURE,
    DELETE_USER_SUCCESS,
    DELETE_USER_START,
    CREATE_USER_FAILURE,
    CREATE_USER_SUCCESS,
    CREATE_USER_REQUEST,
    UPDATE_USER_FAILURE,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_REQUEST,
} from './constants';

import { store } from '../index'

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

//create
export const createUserRequest = () => ({
    type: CREATE_USER_REQUEST,
})

export const createUserSuccess = (user) => ({ // envía el usuario en el payload
    type: CREATE_USER_SUCCESS,
    payload: user
})

export const createUserFailure = (errorMessage) => ({
    type: CREATE_USER_FAILURE,
    payload: errorMessage,
});

//Update
export const updateUserRequest = () => ({
    type: UPDATE_USER_REQUEST,
})

export const updateUserSuccess = (editedUser) => { // este llego de afuera
    const { users : usuarios } = store.getState()//obtenemos los users como "usuarios", del store en este caso del index
    const users = usuarios.data // renombramos users un nuevo arreglo?
    const  indexEdit = users.findIndex(user => user.id === editedUser.id) //buscamos el usuario que hay que manipular donde el id sea igual al de usuario que llega
    users[indexEdit] = editedUser
    return ({
        type: UPDATE_USER_SUCCESS,
        payload: users
    })
}

export const updateUserFailure = (errorMessage) => ({
    type: UPDATE_USER_FAILURE,
    payload: errorMessage,
});

