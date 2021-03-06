import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { createUserStartThunk } from "../../store/users/thunks";

const UserCreate = () => {
    const [ name, setName ] = useState("");
    const dispatch = useDispatch();
    const history = useHistory("/")
    
    const handlerOnSubmit = (event) => {
        event.preventDefault()
        dispatch(createUserStartThunk({ name: name }))
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
        </div>
    )
}

export default UserCreate;