import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateUserStartThunk } from "../../store/users/thunks";



const UserUpdate = () => {
    const { id } = useParams()//trae el id desde los parametros
    const users = useSelector(state => state.users.data)// este user se trae de la data del state
    const [name, setName] = useState(null)
    const dispatch = useDispatch();
    const history = useHistory()
 
    useEffect(() => {
        const user = users.find(user => user.id === parseInt(id))
        setName(user.name)//justo despues que se monta el componente definimos el nombre, toma el nombre del imput
    }, [users, id]) //dependemos de estas dependencias

    const handlerOnUpdate = (event) => {
        event.preventDefault()
        dispatch(updateUserStartThunk({ id:parseInt(id), name:name }))
        history.push("/")
    }


    return(
        <div className="container">
            <h2>Editar Usuario</h2>
            <label for="update" className="form-label">Editar usuario</label>
            <input 
                onChange={event => setName(event.target.value)}
                value={name}
                type="text"
                placeHolder="Editar usuario"
                className="form-control"
                />
            <button onClick={handlerOnUpdate} className="btn btn-success">Editar</button>
        </div>
    )

}

export default UserUpdate;