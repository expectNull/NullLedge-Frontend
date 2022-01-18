import React from 'react';
import { Route, Link } from 'react-router-dom';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import HomeIcon from '@mui/icons-material/Home';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import QuizIcon from '@mui/icons-material/Quiz';
import ChatIcon from '@mui/icons-material/Chat';

function Navbar(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <AppBar position="static">
      <Tabs value={value} onChange={handleChange} aria-label="Main Tabs">
        <Tab label="Home" icon={<HomeIcon />} to="/" component={Link} />
        <Tab
          label="My Questions"
          icon={<QuizIcon />}
          to="/myquestions"
          component={Link}
        />
        <Tab
          label="My Answers"
          icon={<HomeIcon />}
          to="/myanswer"
          component={Link}
        />
        <Tab
          label="Ranking"
          icon={<ThumbUpIcon />}
          to="/ranking"
          component={Link}
        />
      </Tabs>
    </AppBar>
  );
}

export default Navbar;
