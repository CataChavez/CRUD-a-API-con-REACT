import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usersSelector } from '../../store/users/selector'
import {fetchUsersStartThunk } from '../../store/users/thunks'

const UserContainer = () => {
    const users = useSelector(usersSelector);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsersStartThunk())
    }, [])
    return(
        <div>
            <h2>
                Users
            </h2>
        <div>
            {users.data.length > 1 &&
            users.data.map((user) => (
                <h5 key={user.id}>
                    {/* <button onClick={editUserStart}>Edit</button>*/}
                        <div>{user.name}</div>
                        <div>{user.username}</div>
                    {/*<button onClick={deleteUserStart}>Delete</button> */}
                </h5>
            ))}
        </div>
    </div>
    )
}

export default UserContainer