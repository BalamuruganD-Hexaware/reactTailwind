import * as React from 'react';
import { Box } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';

type IProps = {
  label: string;
};

function Footer({ label }: IProps) {
  const [value, setValue] = React.useState(0);

  return (
    <Box className="w-full flex items-center fixed bottom-0">
      <BottomNavigation
        showLabels
        value={value}
        className="w-full"
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <p>{label}</p>
      </BottomNavigation>
    </Box>
  );
}

export default Footer;
