import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Todo from './pages/Todo';

function Router() {
  return (
    <Routes>
      <Route path="/" exact element={<SignIn />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/todo" element={<Todo />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default Router;
