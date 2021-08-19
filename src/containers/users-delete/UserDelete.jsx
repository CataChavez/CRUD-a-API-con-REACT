import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { deleteUserStartThunk } from '../../store/users/thunks';

const UserDelete = () => {
    const { id } = useParams()
    const users = useSelector(state => state.users.data)
    const [ user, setUser ] = useState({})
    const dispatch = useDispatch()
    const history = useHistory()

    const handlerOnDelete = () => {
        dispatch(deleteUserStartThunk(parseInt(id)))
        history.push("/")
    }

    useEffect(() => {
        const user = users.filter((user) => user.id === parseInt(id))[0]
        setUser(user)
        }, [])

    return (

        <div className="confirm-delete">
            ¿Estas seguro que quieres borrar a {user.name}?
            <div>
                <button className="btn btn-light" onClick={handlerOnDelete}>Si</button>
            </div>
        </div>            

    )

}

export default UserDelete;