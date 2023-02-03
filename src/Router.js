import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AccessTokenContext } from './contexts/AccessTokenContext';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Todo from './pages/Todo';

function Router() {
  const { token } = useContext(AccessTokenContext);

  return (
    <Routes>
      <Route
        path="/"
        exact
        element={token ? <Navigate to="/todo" replace /> : <SignIn />}
      ></Route>
      <Route
        path="/signin"
        element={token ? <Navigate to="/todo" replace /> : <SignIn />}
      ></Route>
      <Route
        path="/signup"
        element={token ? <Navigate to="/todo" replace /> : <SignUp />}
      ></Route>
      <Route
        path="/todo"
        element={token ? <Todo /> : <Navigate to="/signin" replace />}
      ></Route>
      <Route
        path="*"
        element={token ? <Todo /> : <Navigate to="/signin" replace />}
      ></Route>
    </Routes>
  );
}

export default Router;
