import React, { useEffect, useState } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import ArrowDropUpSharpIcon from '@mui/icons-material/ArrowDropUpSharp';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { IconButton } from '@mui/material';

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

function buttonColor(bool) {
  if (bool) {
    return;
  }
}

const Like = ({ like_cnt }) => {
  // like cnt를 계산 or Props로 전달
  const [like, setLike] = useState(0);

  function Up() {
    setLike(1);
  }

  function Down() {
    setLike(-1);
  }

  function Cancel() {
    setLike(0);
  }

  return (
    <table className="evaluation">
      <tbody>
        <tr>
          <td>
            <span className="key">
              <IconButton size="small">
                <ThumbUpIcon
                  fontSize="small"
                  className="likebtn"
                  color={like === 1 ? 'primary' : ''}
                  className="icon"
                  onClick={like === 1 ? Cancel : Up}
                />
              </IconButton>
            </span>
            <span className="good">{'  ' + like_cnt}</span>
          </td>
          <td>
            <span className="key">
              <IconButton size="small">
                <ThumbDownIcon
                  fontSize="small"
                  className="likebtn"
                  color={like === -1 ? 'primary' : ''}
                  className="icon"
                  onClick={like === -1 ? Cancel : Down}
                />
              </IconButton>
            </span>
            <span className="bad">{'  ' + like_cnt}</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Like;
