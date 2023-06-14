import { PropsWithChildren, useEffect, useState } from 'react';
import { useDispatch } from '@/store';
import { setAuth } from './store/auth.slice';
import {
  configurationAuth0,
  configurationAzure,
  configurationGoogle,
  configurationIdentityServer,
  configurationOkta,
} from './Configurations';
import { OidcProvider, useOidc } from '@axa-fr/react-oidc';

const AppAuthenticator = ({ children, configurationName }: any) => {
  const dispatch = useDispatch();

  const { isAuthenticated } = useOidc(configurationName);

  useEffect(() => {
    if (isAuthenticated) {
      console.log('In first Use Effect', localStorage['user']);
      dispatch(setAuth(localStorage['user']));
    }
  }, [isAuthenticated]);

  return <>{children}</>;
};

function AppAuthProvider({ children }: PropsWithChildren) {
  const [configurationName] = useState<string>(localStorage.configurationName);
  const callBack =
    window.location.origin + '/multi-auth/authentification/callback2';
  const silent_redirect_uri =
    window.location.origin + '/multi-auth/authentification/silent-callback2';
  const configurations: any = {
    config_classic: {
      ...configurationIdentityServer,
      redirect_uri: callBack,
      silent_redirect_uri,
      scope: 'openid profile email api offline_access',
    },
    config_google: { ...configurationGoogle },
    config_auth0: { ...configurationAuth0 },
    config_okta: { ...configurationOkta },
    config_azure: { ...configurationAzure },
  };

  return (
    <OidcProvider
      configuration={configurations[configurationName]}
      configurationName={configurationName}
    >
      <AppAuthenticator configurationName={configurationName}>
        {children}
      </AppAuthenticator>
    </OidcProvider>
  );
}

export default AppAuthProvider;
