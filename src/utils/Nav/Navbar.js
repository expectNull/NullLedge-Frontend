import './Navbar.css';
import React from 'react';
import { Route, Link } from 'react-router-dom';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import HomeIcon from '@mui/icons-material/Home';
import Toolbar from '@mui/material/Toolbar';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import QuizIcon from '@mui/icons-material/Quiz';
import ChatIcon from '@mui/icons-material/Chat';
import SearchAppBar from '../Search/Search';
import { LoginButton, LogoutButton } from '../Button/Button';

function Navbar(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    
  );
}

export default Navbar;
