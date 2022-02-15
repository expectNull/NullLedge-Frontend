import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export function BasicRating() {
  // 쿼리로 해당 질문에 Rate 되었는지 확인 필요.
  const [value, setValue] = useState(0);
  const [check, setCheck] = useState(false);

  function isValue(event, newValue) {
    setValue(newValue);
  }

  function submit() {
    // 쿼리로 점수 전달하기.
    setCheck(check => !check);
  }

  return (
    <Box>
      <Typography component="legend">Rate the reply</Typography>
      <Rating name="simple-controlled" value={value} onChange={isValue} />
      <br />
      <button onClick={submit} disabled={check}>
        제출
      </button>
    </Box>
  );
}
