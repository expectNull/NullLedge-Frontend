import './PostItem.css';
import React from 'react';

import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import SvgIcon from '@mui/material/SvgIcon';
import CampaignIcon from '@mui/icons-material/Campaign';

// <PostItem name="질문인데 이걸로 어떻게 해야함" writer="Kim" postIdx="5" />;
export function PostItem({ name, writer, postIdx }) {
  // SQL 쿼리로 Like, answers, votes의 수, post의 이름, post의 간략한 정리, 작성자 정보
  //

  return (
    <>
      <hr />
      <div className="post_container">
        <Stack className="post_numbers">
          <span className="post_like">{'50'} Likes</span>
          <div className="post_ans">
            <SvgIcon
              className={'vertical_center' + ' svg_margin'}
              fontSize="small"
              style={{ color: 'white' }}
              component={CampaignIcon}
            />
            <span className="vertical_center" style={{ color: 'white' }}>
              {'23'} Answers
            </span>
          </div>

          <span className="post_view">{'155'} Views</span>
        </Stack>

        <Stack className="post_inside">
          <Link to="/" style={{ textDecoration: 'none', color: '#33a7ff' }}>
            {'Post name will go in here'}
          </Link>
          <p className="post_content">{`Somebody pushed a branch called test with git push origin test to a shared repository. I can see the branch with git branch -r.
Now I'm trying to check out the remote test branch. I've tried: git ...`}</p>

          <Stack direction="row" justifyContent="flex-end" alignItems="center">
            <Link to={`/mypage/${writer}`} style={{ marginRight: '2vh' }}>
              <Chip
                avatar={
                  <Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />
                }
                label="Avatar"
                variant="outlined"
                clickable
              />
            </Link>
            <span className="post_date">asked {'2022.02.15'}</span>
          </Stack>
        </Stack>
      </div>
      <hr />
    </>
  );
}
