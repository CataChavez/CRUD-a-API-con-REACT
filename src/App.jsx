import './App.css';
import UserList from './containers/users-list/UserList';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import UserDelete from './containers/users-delete/UserDelete';
import UserCreate from './containers/user-create/UserCreate';
import UserUpdate from './containers/user-update/UserUpdate';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Router>
        {/* Navlink */}
        <h3 className="nav-link">
          <NavLink to="/">
            Home |          
          </NavLink>
          <NavLink to="/users/create">
            | Crear Usuario
          </NavLink>
        </h3>
        <div className="Users-table">
          <Switch>
            {/* Home */}
            <Route path="/" exact>              
                <UserList />
            </Route>

            {/* Ruta a confirmación de delete */}
            <Route path="/users/delete/:id" exact>
              <UserDelete />
            </Route>

            {/* Ruta al Form del create */}
            <Route path="/users/create" exact>
              <UserCreate />
            </Route>

            {/* Ruta al Form del edit */}
            <Route path="/users/update/:id" exact>
              <UserUpdate />
            </Route>

          </Switch>        

      </div>
      </Router>
      </div>
  
    </div>
  );
}

export default App;
