import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { useSelector } from '@/store/index';
import { useOidc } from '@axa-fr/react-oidc';

type IProps = {
  configurationName: string;
};

function BasicMenu({ configurationName }: IProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const { logout, isAuthenticated } = useOidc(configurationName);
  const user = useSelector(state => state.authSlice.auth.user);

  const logoutUser = () => {
    localStorage.clear();
    sessionStorage.clear();
    logout();
    navigate('/login');
  };

  return (
    <>
      {isAuthenticated ? (
        <div>
          <Button
            style={{
              position: 'fixed',
              left: '1100px',
              top: '10px',
              width: '120px',
            }}
            onClick={handleClick}
          >
            {user.split('@')[0]}
          </Button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem>{user}</MenuItem>
            <MenuItem>My Account</MenuItem>
            <MenuItem onClick={() => logoutUser()}>Logout</MenuItem>
          </Menu>
        </div>
      ) : (
        <Button onClick={() => navigate('/login')}>Sign In</Button>
      )}
    </>
  );
}

export default BasicMenu;
