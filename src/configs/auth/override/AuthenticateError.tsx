import { style } from './style';

const AuthenticatingError = ({ configurationName }: any) => {
  return (
    <div className="oidc-authenticating" style={style || {}}>
      <div className="oidc-authenticating__container">
        <h1 className="oidc-authenticating__title">
          Error authentication for {configurationName}
        </h1>
        <p className="oidc-authenticating__content">
          An error occurred during authentication.
        </p>
      </div>
    </div>
  );
};

export default AuthenticatingError;
