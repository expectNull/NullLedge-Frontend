import * as React from 'react';
import Link from '@mui/material/Link';
import { Search, StyledInputBase, SearchIconWrapper } from './HeaderStyled';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  MenuItem,
  Paper,
  Menu,
  Typography,
  Tabs,
  Tab,
  Stack,
  Button,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

import { NotificationsIcon, LogoIcon } from '../Icon/Icon';

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link href="/mypage" underline="none" color="inherit">
        <MenuItem onClick={handleMenuClose}>My Page</MenuItem>
      </Link>
      <Link href="/setting" underline="none" color="inherit">
        <MenuItem onClick={handleMenuClose}>Setting</MenuItem>
      </Link>
      <Link href="/" underline="none" color="inherit">
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Link>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show new notifications"
          color="inherit"
        >
          <NotificationsIcon props={17} />
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Avatar alt="User Image" src="../../../public/logo192.png" />
        </IconButton>
        <p>User</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Link href="/" underline="none" color="white">
              <LogoIcon />
            </Link>
            <Search className="Search">
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Avatar alt="Image" src="image from BE" />
              </IconButton>
              <IconButton
                size="large"
                aria-label="show new notifications"
                color="inherit"
              >
                <NotificationsIcon props={17}></NotificationsIcon>
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </>
  );
}

function QuestionHeader() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const [value, setValue] = React.useState('newest');

  React.useEffect(() => {
    showSortedPage(value);
  }, [value]);

  const showSortedPage = sortOption => {
    console.log(sortOption);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="baseline"
        spacing={40}
      >
        <Typography variant="h3">Questions</Typography>
        <Button variant="contained" color="primary">
          <QuestionMarkIcon />
          Ask Question
          <QuestionMarkIcon />
        </Button>
      </Stack>

      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="baseline"
        spacing={8}
      >
        <Tabs value={value} onChange={handleChange} aria-label="Sorting Tabs">
          <Tab value="newest" label="Newest" />
          <Tab value="like" label="Like" />
          <Tab value="view" label="View" />
          <Tab value="unsolved" label="unsolved" />
          <Tab value="solved" label="solved" />
        </Tabs>
      </Stack>
    </>
  );
}
function TagHeader() {
  return;
}
function UsersHeader() {
  return;
}

export { Header, QuestionHeader, TagHeader, UsersHeader };
