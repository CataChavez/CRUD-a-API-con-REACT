import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createUserRequest } from "../../store/users/actions";
import { useHistory } from "react-router";
import { createUserStartThunk } from "../../store/users/thunks";

const UserCreate = () => {
    const [ name, setName ] = useState("");
    const dispatch = useDispatch();
    const history = useHistory("/")
    
    const handlerOnSubmit = (event) => {
        event.preventDefault()
        dispatch(createUserStartThunk({ name: name, id: new Date().getTime() }))
        history.push("/")
    }
    
    return(
        <div className="container">
            <h2>Agregar Usuario</h2>
            <label for="Nombre a agregar" className="form-label">Nuevo usuario</label>
            <input 
                onChange={event => setName(event.target.value)}
                value={name}
                type="text"
                placeHolder="Agregar nuevo Usuario"
                className="form-control"
                />

            <button onClick={handlerOnSubmit} className="btn btn-success">Agregar</button>
{/*             {users.length > 0 && users.map((user) => <div>{user.name}</div>)} */}
        </div>
    )
}

export default UserCreate;