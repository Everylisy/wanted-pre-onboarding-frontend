import AccessTokenProvider from './contexts/AccessTokenProvider';
import GlobalStyle from './GlobalStyle';
import Router from './Router';

function App() {
  return (
    <AccessTokenProvider>
      <GlobalStyle />
      <Router />
    </AccessTokenProvider>
  );
}

export default App;
