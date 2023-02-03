import AccessTokenProvider from './contexts/AccessTokenProvider';
import Router from './Router';

function App() {
  return (
    <AccessTokenProvider>
      <Router />
    </AccessTokenProvider>
  );
}

export default App;
