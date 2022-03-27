import React, { useEffect, useState } from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { IconButton } from '@mui/material';
import axios from 'axios';
import wait from 'waait';

import './Like.css';
import { Alert } from '../Alert/Alert';
import { checkCookie } from '../../utils/checkCookie';

const theme = createTheme({
  palette: {
    primary: {
      main: '#546e7a',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ff7043',
      contrastText: '#000',
    },
  },
});

async function setLikePost(check, post_id, token, value) {
  // check == 0 : 처음 접속한 경우 where, insert 사용
  // check == 1 : 좋아요를 누른 경우로 update 사용
  const info = {
    post_id: Number(post_id),
    token: token,
    value: value,
  };
  await axios.post(
    `${process.env.REACT_APP_API_URL}${check ? '/setLike' : '/setLikeInit'}`,
    info,
  );
}

const Like = ({ like_cnt, post_id }) => {
  // user_id 체크 필요.
  const [like, setLike] = useState(null);
  const [cnt, setCnt] = useState(like_cnt);
  const [token, setToken] = useState(undefined);

  async function getLikePost(post_id) {
    const info = { post_id: Number(post_id) };

    setCnt(
      await (
        await axios.post(`${process.env.REACT_APP_API_URL}/getLike`, info)
      ).data,
    );
  }

  async function Up() {
    if (token === undefined) {
      Alert('error', 'Login이 필요합니다.');
      return;
    }
    // SQL의 Update문이 2밀리초를 소요하기 때문에 대기 해야함.
    setLike(1);
    await setLikePost(1, post_id, token, 1);
    await wait(20);
    await getLikePost(post_id);
  }

  async function Down() {
    if (token === undefined) {
      Alert('error', 'Login이 필요합니다.');
      return;
    }
    setLike(-1);
    await setLikePost(1, post_id, token, -1);
    await wait(20);
    await getLikePost(post_id);
  }

  async function Cancel() {
    if (token === undefined) {
      Alert('error', 'Login이 필요합니다.');
      return;
    }
    setLike(0);
    await setLikePost(1, post_id, token, 0);
    await wait(20);
    await getLikePost(post_id);
  }

  useEffect(() => {
    const LikeInit = async () => {
      const info = { post_id: Number(post_id), token: token };
      setLike(
        await (
          await axios.post(`${process.env.REACT_APP_API_URL}/checkLike`, info)
        ).data,
      );
      let ret = await checkCookie();
      setToken(ret);

      await setLikePost(0, post_id, ret, 0);
      await getLikePost(post_id);
    };
    LikeInit();
  }, []);
  return (
    <table className="evaluation">
      <tbody>
        <tr>
          <td>
            <span className="key">
              <IconButton
                size="small"
                onClick={like === 1 ? Cancel : Up}
                disabled={like === null ? true : false}
              >
                <ThumbUpIcon
                  fontSize="small"
                  className={'likebtn ' + 'icon'}
                  color={like === 1 ? 'primary' : ''}
                />
              </IconButton>
            </span>
            <span className="good">{'  ' + cnt}</span>
          </td>
          <td>
            <span className="key">
              <IconButton
                size="small"
                onClick={like === -1 ? Cancel : Down}
                disabled={like === null ? true : false}
              >
                <ThumbDownIcon
                  fontSize="small"
                  className={'likebtn ' + 'icon'}
                  color={like === -1 ? 'primary' : ''}
                />
              </IconButton>
            </span>
            <span className="bad"></span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Like;
