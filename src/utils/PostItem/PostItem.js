import './PostItem.css';
import React from 'react';

import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import SvgIcon from '@mui/material/SvgIcon';
import CampaignIcon from '@mui/icons-material/Campaign';

// <PostItem name="질문인데 이걸로 어떻게 해야함" writer="Kim" postIdx="5" />;
export function PostItem({
  post_id,
  like,
  ans,
  view,
  post_nm,
  ymd,
  user_nm,
  content,
}) {
  // SQL 쿼리로 Like, answers, post의 이름, 날짜, 작성자 정보
  console.log(content);
  let parsedContent = content.replaceAll(/(<([^>]+)>)/gi, ' ');
  console.log(parsedContent);

  return (
    <>
      <hr />
      <div className="post_container">
        <Stack className="post_numbers">
          <span className="post_like">{like} Likes</span>

          <div className="post_ans">
            <SvgIcon
              className={'vertical_center' + ' svg_margin'}
              fontSize="small"
              style={{ color: 'white' }}
              component={CampaignIcon}
            />
            <span className="vertical_center" style={{ color: 'white' }}>
              {ans} Answers
            </span>
          </div>

          <span className="post_view">{view} Views</span>
        </Stack>

        <Stack className="post_inside">
          <Link
            to={`/post/${post_id}`}
            style={{ textDecoration: 'none', color: '#33a7ff' }}
          >
            {post_nm}
          </Link>

          <div className="content_div">
            <Link
              to={`/post/${post_id}`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <p className="post_content">{parsedContent}</p>
            </Link>
          </div>

          <Stack direction="row" justifyContent="flex-end" alignItems="center">
            <Link
              to={`/mypage/${user_nm}`}
              style={{ marginRight: '2vh', textDecoration: 'none' }}
            >
              <Chip
                avatar={
                  <Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />
                }
                label="Avatar"
                variant="outlined"
                clickable
              />
            </Link>
            <span className="post_date">asked {ymd}</span>
          </Stack>
        </Stack>
      </div>
    </>
  );
}
