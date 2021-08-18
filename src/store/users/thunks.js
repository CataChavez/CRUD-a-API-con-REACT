import {
    fetchUsersFailure,
    fetchUsersStart,
    fetchUsersSucces,
    deleteUserFailure,
    deleteUserStart,
    deleteUserSuccess
} from './actions';

//Fetch
export const fetchUsersStartThunk = () => {
    return async (dispatch, getState) => {
        const { users } = getState();
        if (users.data.length > 10){ return; }
        dispatch(fetchUsersStart());
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
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