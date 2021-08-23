import {
    fetchUsersFailure,
    fetchUsersStart,
    fetchUsersSucces,
    deleteUserFailure,
    deleteUserStart,
    deleteUserSuccess,
    createUserRequest,
    createUserSuccess,
    createUserFailure,  
    updateUserRequest,
    updateUserSuccess,
    updateUserFailure,

} from './actions';

//Fetch
export const fetchUsersStartThunk = () => {
    return async (dispatch, getState) => {
        const { users } = getState();
        if (users.data.length > 10){ return; }
        dispatch(fetchUsersStart());
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users",{
                mode: 'no-cors'
            });
            const data = await response.json();
            dispatch(fetchUsersSucces(data));
        }
        catch (error){
            dispatch(fetchUsersFailure(error.message));
        }
    };
};

//Delete
export const deleteUserStartThunk = (id) => {
    return async (dispatch, getState) => {
        dispatch(deleteUserStart());
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                method: 'DELETE'
            })
            const data = await response.json();
            dispatch(deleteUserSuccess(id))//luego que la api borra al usuario, tenemos que borrarla del estado
        } catch (error) {
            dispatch(deleteUserFailure(error.message))
        }

    }
}

//Create
export const createUserStartThunk = (user) => { //este user lo envía como objeto
    return async (dispatch, getState) => {
        dispatch(createUserRequest());
        try {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json; charset=UTF-8" },
                body: JSON.stringify(user),
            };
            const res = await fetch("https://jsonplaceholder.typicode.com/users",
                requestOptions
            )
            const data = await res.json()
            dispatch(createUserSuccess(data))
        } catch (error){
            dispatch(createUserFailure(error.message));
        }
    }
}
//update
export const updateUserStartThunk = (user) => { //este user lo envía como objeto
    return async (dispatch) => {
        dispatch(updateUserRequest());
        try {
            const requestOptions = {
                method: "PUT",
                headers: { "Content-Type": "application/json; charset=UTF-8" },
                body: JSON.stringify(user),
            };
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`,
                requestOptions
            )
            const data = await res.json()
            dispatch(updateUserSuccess(data))
        } catch (error){
            dispatch(updateUserFailure(error.message));
        }
    }
}

