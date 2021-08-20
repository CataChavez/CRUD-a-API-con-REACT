import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchUsersStartThunk } from '../../store/users/thunks'
import { Link } from 'react-router-dom'


const UserContainer = () => {
    const { data : users, isLoading } = useSelector(state => state.users);// destructuramos el objeto y obtenemos los usuarios y is loading
    const dispatch = useDispatch()
    
    
    useEffect(() => {
        if (isLoading === 'iddle')
        dispatch(fetchUsersStartThunk())
    }, [isLoading, dispatch])

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
                            <Link to={`/users/update/${user.id}`}> 
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