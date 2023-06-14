import React from 'react';
import './App.css';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import routes from './configs/router/routes.config';
import ErrorFallback from './common/pages/Error';
import { configurationIdentityServer } from './configs/auth/Configurations';
import { OidcProvider } from '@axa-fr/react-oidc';
import AppAuthProvider from './configs/auth/AppAuthenticator';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store';

const GlobalRoutes = () => useRoutes(routes());

function App() {
  return (
    <ReduxProvider store={store}>
      <Router>
        <OidcProvider configuration={configurationIdentityServer}>
          <AppAuthProvider>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <GlobalRoutes></GlobalRoutes>
            </ErrorBoundary>
          </AppAuthProvider>
        </OidcProvider>
      </Router>
    </ReduxProvider>
  );
}

export default App;
