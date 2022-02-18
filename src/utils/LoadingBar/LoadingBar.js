import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
function LoadingBar(props) {
  return (
    <>
      <hr />
      <Stack spacing={1} alignItems="center">
        <Skeleton variant="text" width={510} height={50} />
        <Skeleton variant="rectangular" width={510} height={90} />
      </Stack>
    </>
  );
}

export default LoadingBar;
