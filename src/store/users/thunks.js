import {
    fetchUsersFailure,
    fetchUsersStart,
    fetchUsersSucces,
} from './actions';

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

export default fetchUsersStartThunk;