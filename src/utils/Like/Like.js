import React, { useEffect, useState } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import ArrowDropUpSharpIcon from '@mui/icons-material/ArrowDropUpSharp';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

// 예시 <Like post="이거 되냐" writer="장신형" />
const Like = ({ post, writer }) => {
  // like cnt를 계산 or Props로 전달
  const [isUp, setIsup] = useState(false);
  const [isDown, setIsdown] = useState(false);

  function Up() {
    if (isDown) {
      alert('You already Voted!');
      return;
    }
    setIsup(isUp => !isUp);
  }

  function Down() {
    if (isUp) {
      alert('You already Voted!');
      return;
    }
    setIsdown(isDown => !isDown);
  }

  return (
    <Stack>
      <ThemeProvider theme={theme}>
        <Button onClick={Up}>
          <SvgIcon
            fontSize="large"
            component={ArrowDropUpSharpIcon}
            color={isUp ? 'secondary' : 'primary'}
          />
        </Button>

        <span>{post}</span>
        <span>{writer}</span>

        <Button onClick={Down}>
          <SvgIcon
            fontSize="large"
            component={ArrowDropDownSharpIcon}
            color={isDown ? 'secondary' : 'primary'}
          />
        </Button>
      </ThemeProvider>
    </Stack>
  );
};

export default Like;
