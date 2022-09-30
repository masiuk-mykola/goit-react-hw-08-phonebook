import { MyAppBar } from 'components/AppBar/AppBar';
import { Box } from 'components/Box';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100%">
      <MyAppBar />
      <Outlet />
    </Box>
  );
};
