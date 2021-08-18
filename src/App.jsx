import './App.css';
import UserList from './containers/users-list/UserList';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import UserDelete from './containers/users-delete/UserDelete';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Router>
        <h3 className="nav-link">
          <NavLink to="/">
            Home |          
          </NavLink>
          <NavLink to="create">
            | Crear Usuario
          </NavLink>
        </h3>
        <div className="Users-table">
          <Switch>
            <Route path="/" exact>
              
                <UserList />

            </Route>
            <Route path="/users/delete/:id">
              <UserDelete />
            </Route>
          </Switch>        

      </div>
      </Router>
      </div>
  
    </div>
  );
}

export default App;
