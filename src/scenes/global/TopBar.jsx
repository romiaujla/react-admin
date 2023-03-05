import { Box, IconButton, InputBase, useTheme } from '@mui/material';
import { useContext } from 'react';
import { tokens, ColorModeContext } from '../../theme';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';

const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return <Box
    display="flex"
    justifyContent="space-between"
    padding={2}
  >

    {/* Search Bar */}
    <Box
      display="flex"
      backgroundColor={colors.primary[400]}
      borderRadius="3px"
    >
      <InputBase sx={{
        marginLeft: 2,
        display: 'flex',
        color: (theme) => {
          if (theme.palette.mode === 'dark') {
            return theme.palette.grey.dark;
          };
          return '#FFF';
        }
      }} placeholder="Search"></InputBase>
      <IconButton type="button" sx={{padding: 1}}>
        <SearchIcon />
      </IconButton>
    </Box>

    {/* Icons Section */}
    <Box
      display="flex"
    >
      <IconButton sx={{}} onClick={colorMode.toggleColorMode}>
        {
          theme.palette.mode === 'dark' ?
            <DarkModeOutlinedIcon /> :
            <LightModeOutlinedIcon />
        }
      </IconButton>
      <IconButton sx={{}}>
        <NotificationsOutlinedIcon />
      </IconButton>
      <IconButton sx={{}}>
        <SettingOutlinedIcon />
      </IconButton>
      <IconButton sx={{}}>
        <PersonOutlinedIcon />
      </IconButton>
    </Box>
  </Box>;
};

export default TopBar;
