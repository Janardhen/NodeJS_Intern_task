
import './App.css';
import Users from './Users';
import UserProfile from './UserProfile';
import { useRoutes } from 'hookrouter';

const routes = {
  '/userprofile/:id': ({ id }) => <UserProfile id={id} />,
  '/': () => <Users />,
};

const App = () => {
  const routeResult = useRoutes(routes);

  return routeResult || <h1>Page Not Found blah blah</h1>;
}

export default App;
