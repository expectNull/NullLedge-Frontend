import * as React from 'react';
import { useEffect, useState } from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import './Notice.css';

async function getPost() {}

export default function Notice() {
  const [post, setPost] = useState(-1);
  const [close, setClose] = useState(false);
  const handleClose = () => setClose(true);
  // console.log(close);

  // load를 했는지 확인하는 함수 필요
  // useEffect(() => {
  //   const getStuff = async () => {
  //     // let ret = await (await getPost()).data;
  //     setPost(ret);
  //   };
  //   getStuff();
  // }, []);

  return (
    <>
      {!close ? (
        <div className="notice" onClick={handleClose}>
          {post === -1 ? (
            <Box className="spinner" sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
