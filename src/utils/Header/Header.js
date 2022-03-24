import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import wait from 'waait';
import { useSelector } from 'react-redux';

import Link from '@mui/material/Link';
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

import LoadingBar from '../../utils/LoadingBar/LoadingBar';
import Like from '../../utils/Like/Like';
import Tag from '../../utils/Tag/Tag';
import { NoticeCard } from '../../utils/Card/Card';
import { Search, StyledInputBase, SearchIconWrapper } from './HeaderStyled';
import { NotificationsIcon, LogoIcon } from '../Icon/Icon';
import { checkCookie, checkUser } from '../checkCookie';

import './Header.css';
import { Delete } from '@material-ui/icons';

async function getNotice(token) {
  const info = {
    mail: token,
  };

  let response = await (
    await axios.post(process.env.REACT_APP_API_URL + '/getNotice', info)
  ).data;

  return response;
}

function Header() {
  const el = useRef();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [noticeList, setNoticeList] = React.useState('hiddenDiv');
  const [menuList, setMenuList] = React.useState('hiddenDiv');
  const [scroll, setScroll] = React.useState('null');

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [token, setToken] = useState(-1);
  const [notice, setNotice] = useState(-1);

  useEffect(() => {
    const getCookie = async () => {
      let ret = await checkCookie();
      setNotice(await getNotice(ret));
      setToken(ret);
    };
    getCookie();
  }, []);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleNoticeList = async () => {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve('success'), 100);
    });

    let result = await promise;

    if (noticeList === 'openDiv') {
      setNoticeList('hiddenDiv');
    } else {
      setNoticeList('openDiv');
    }
  };
  async function removeCookie() {
    let response = await (
      await axios.post(
        process.env.REACT_APP_API_URL + '/removeCookie',
        {},
        { withCredentials: true },
      )
    ).data;
    console.log('remove Cookie');
  }

  const handleMenuList = async () => {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve('success'), 100);
    });

    let result = await promise;

    if (menuList === 'openDiv') {
      setMenuList('hiddenDiv');
    } else {
      setMenuList('openDiv');
    }
  };

  const closeAllthings = e => {
    const noticeDiv = document.querySelector('.noticeList');
    const menuDiv = document.querySelector('.mainheader .menu');

    if (noticeList === 'openDiv' && !noticeDiv.contains(e.target))
      setNoticeList('hiddenDiv');
    if (menuList === 'openDiv' && !menuDiv.contains(e.target))
      setMenuList('hiddenDiv');
  };

  // For Notice Bar scroll decoration
  const handleScroll = async event => {
    setScroll(event);

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve('success'), 1000);
    });

    let result = await promise;

    setScroll(null);
  };

  const handleMenuClose = thing => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const logout = async thing => {
    await removeCookie();
    await wait(300);
    window.location.href = '/';
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      className="menu"
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
      {token === -1 ? (
        'loading'
      ) : token === undefined ? (
        <Link href="/login" underline="none" color="inherit">
          <MenuItem onClick={handleMenuClose}>Login</MenuItem>
        </Link>
      ) : (
        // <Link underline="none" color="inherit">
        <button
          onClick={async () => {
            await logout();
          }}
        >
          Logout
        </button>

        // </Link>
      )}
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
          <NotificationsIcon props={notice === -1 ? 0 : notice.length} />
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

  useEffect(() => {
    window.addEventListener('click', closeAllthings);

    return () => {
      window.removeEventListener('click', closeAllthings);
    };
  });

  return (
    <div className="mainheader">
      <Box sx={{ flexGrow: 1, backgroundColor: 'primary.main', opacity: '1' }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Link href="/" underline="none" color="white">
              <LogoIcon />
            </Link>
            {/* <Search className="Search">
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search> */}
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {token === -1 ? (
                'loading'
              ) : token === undefined ? (
                <Link href="/login" underline="none" color="inherit">
                  Login
                </Link>
              ) : (
                <>
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleMenuList}
                    color="inherit"
                  >
                    <Avatar alt="Image" src="image from BE" />
                  </IconButton>
                  <IconButton
                    size="large"
                    aria-label="show new notifications"
                    color="inherit"
                    onClick={handleNoticeList}
                  >
                    <NotificationsIcon
                      props={notice === -1 ? 0 : notice.length}
                    ></NotificationsIcon>
                  </IconButton>
                </>
              )}
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

        <div className={'menu ' + menuList}>
          <Link href="/mypage" underline="none" color="inherit">
            <MenuItem onClick={handleMenuClose}>My Page</MenuItem>
          </Link>
          <Link href="/setting" underline="none" color="inherit">
            <MenuItem onClick={handleMenuClose}>Setting</MenuItem>
          </Link>
          {token === -1 ? (
            'loading'
          ) : token === undefined ? (
            <Link href="/login" underline="none" color="inherit">
              <MenuItem onClick={handleMenuClose}>Login</MenuItem>
            </Link>
          ) : (
            // <Link href="/" underline="none" color="inherit">
            <MenuItem
              onClick={async () => {
                await logout();
              }}
            >
              Logout
            </MenuItem>
            // </Link>
          )}
        </div>

        <div
          className={
            noticeList +
            ' noticeList' +
            (scroll === null ? ' scrollHidden' : '')
          }
          onScroll={handleScroll}
          ref={el}
        >
          {notice === -1 ? (
            <></>
          ) : (
            notice.content.map(item => (
              <NoticeCard
                notice_id={item.notice_id}
                post_id={item.post_id}
                parent_id={item.parent_id}
                parent={item.parent_nm}
                title={item.nm}
                user={item.user_nm}
                type={item.type_gb}
                ymd={item.ymd}
                content={item.content}
              />
            ))
          )}
        </div>
      </Box>
    </div>
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
  const [token, setToken] = useState(-1);

  useEffect(() => {
    const getCookie = async () => {
      let ret = await checkCookie();
      setToken(ret);
    };
    getCookie();
  }, []);

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
    <div className="question_header">
      <div className="top_header">
        <div className="header_title">
          <h1>Questions</h1>
        </div>
        <Button
          className={'ask_button' + 'save_btn'}
          variant="contained"
          color="primary"
          disabled={token === -1 ? true : false}
        >
          <Link
            // login 정보를 이용해서 리다이렉션 페이지 변경.
            href={token === undefined ? '/login' : '/ask'}
            underline="none"
            color="inherit"
          >
            Ask Question
          </Link>
        </Button>
      </div>

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
    </div>
  );
}

function TagHeader({ value }) {
  return (
    <div className="question_header">
      <div className="top_header">
        <div className="header_title">
          <h1>{value ? `Tag : ${value}` : `Tags`}</h1>
        </div>
      </div>
    </div>
  );
  return;
}
function RankHeader() {
  return (
    <div className="rank_header">
      <div className="top_header">
        <div className="header_title">
          <h1>Ranking</h1>
        </div>
      </div>
    </div>
  );
}

async function getTag(postId) {
  const info = {
    post_id: Number(postId),
  };

  return await (
    await axios.post(`${process.env.REACT_APP_API_URL}/getPostTag`, info)
  ).data;
}

function PostHeader({ post_nm, ymd, view, like, post_id }) {
  const [tags, setTags] = useState(-1);
  const [replys, setreplys] = useState(-1);
  const [token, setToken] = useState(-1);
  const [postToken, setPostToken] = useState(-1);
  let idx = 0;

  useEffect(() => {
    const getStuff = async () => {
      setTags(await getTag(post_id));
      setreplys(await getSomething(post_id, 'getReplys'));
    };
    const getCookie = async () => {
      let ret = await checkCookie();
      setPostToken(await checkUser(post_id));
      setToken(ret);
    };
    getCookie();
    getStuff();
  }, []);

  async function getSomething(id, pos) {
    const info = {
      post_id: Number(id),
    };

    return await (
      await axios.post(`${process.env.REACT_APP_API_URL}/${pos}`, info)
    ).data;
  }

  async function removePost(id) {
    const info = {
      post_id: Number(id),
    };

    await axios.post(`${process.env.REACT_APP_API_URL}/removePost`, info);
    alert('글이 정상적으로 삭제되었습니다.');
    window.location.href = '/';
  }

  // if replys in here, can't remove
  // to do : post's user === login user -> show remove button
  return (
    <div className="titleDiv">
      <h1>
        {post_nm}
        {token === -1 || postToken === -1 || replys === -1 ? (
          <></>
        ) : replys.length < 1 && token === postToken ? (
          <IconButton
            size="small"
            onClick={() => {
              removePost(post_id);
            }}
          >
            <Delete fontSize="small" />
          </IconButton>
        ) : (
          <></>
        )}
      </h1>
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <span className="key">Asked</span>
                <span className="value">{ymd}</span>
              </td>
              <td>
                <span className="key">View</span>
                <span className="value">{view} times</span>
              </td>
            </tr>
          </tbody>
        </table>
        <Like className="evaluation" like_cnt={like} post_id={post_id} />
      </div>

      {tags === -1 ? (
        <LoadingBar />
      ) : (
        tags.map(item => {
          idx++;
          return <Tag idx={idx} value={item} />;
        })
      )}
      <hr></hr>
    </div>
  );
}

// function tempHeader(props) {
//   return (
//     <div>
//       <Stack
//         direction="row"
//         justifyContent="flex-end"
//         alignItems="baseline"
//         spacing={8}
//       >
//         <Tabs value={value} onChange={handleChange} aria-label="Sorting Tabs">
//           <Tab value="whyrano" label="whyrano" />
//           <Tab value="login" label="Login" />
//         </Tabs>
//       </Stack>
//     </div>
//   );
// }

export default Header;

export {
  Header,
  QuestionHeader,
  TagHeader,
  RankHeader,
  PostHeader,
  // tempHeader,
};
