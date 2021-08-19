import './App.css';
import UserList from './containers/users-list/UserList';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import UserDelete from './containers/users-delete/UserDelete';
import UserCreate from './containers/user-create/UserCreate';

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
            <Route path="/users/delete/:id">
              <UserDelete />
            </Route>

            {/* Ruta al Form del create */}
            <Route path="/users/create">
              <UserCreate />
            </Route>

          </Switch>        

      </div>
      </Router>
      </div>
  
    </div>
  );
}

export default App;
