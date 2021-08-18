import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchUsersStartThunk } from '../../store/users/thunks'
import { Link } from 'react-router-dom'

const UserContainer = () => {
    const users = useSelector(state => state.users.data);
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchUsersStartThunk())
    }, [])
    return(
        <div className="container" >
            <div>
                <h1 className="border-bottom">
                    Users
                </h1>
            <div>
                {users.map((user) => (
                    <div className="row" key={user.id}>
                        <h4 className="col-4">
                            {user.name}
                        </h4>
                        <div className="col-3">
                            <Link> 
                                <button className="btn btn-warning">Edit</button>
                            </Link>
                            <Link  to={`/users/delete/${user.id}`}>
                                <button className="btn btn-danger">Delete</button>
                            </Link>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}

export default UserContainer