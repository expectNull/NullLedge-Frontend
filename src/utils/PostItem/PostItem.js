import './PostItem.css';
import React from 'react';

import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import SvgIcon from '@mui/material/SvgIcon';
import CampaignIcon from '@mui/icons-material/Campaign';

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
  content = content.replaceAll(/\`\`\`[^]*\`\`\`/gi, '[작성 코드]');
  content = content.replaceAll('#', '');
  content = content.replaceAll(/\!\[[^]*\][^]*\)/gi, '[그림]');

  return (
    <>
      <hr />
      <div className="post_container">
        {/* left div */}
        <Stack className="post_numbers">
          <div className="post_like">{like} Likes</div>

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

          <div className="post_view">{view} Views</div>
        </Stack>

        {/* right div */}
        <Stack className="post_inside">
          <div className="content_nm">
            <Link
              to={`/post/${post_id}`}
              style={{ textDecoration: 'none', color: '#33a7ff' }}
            >
              <p className="post_nm">{post_nm}</p>
            </Link>
          </div>

          <div className="content_div">
            <Link
              to={`/post/${post_id}`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <p className="post_content">{content}</p>
            </Link>
          </div>

          <div className="card-helper">
            <Stack className="card" direction="row" alignItems="center">
              <Link
                to={`/mypage/${user_nm}`}
                style={{ marginRight: '2vh', textDecoration: 'none' }}
              >
                <Chip
                  avatar={
                    <Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />
                  }
                  label={user_nm}
                  variant="outlined"
                  clickable
                />
              </Link>
              <div className="post_date">asked {ymd}</div>
            </Stack>
          </div>
        </Stack>
      </div>
    </>
  );
}
