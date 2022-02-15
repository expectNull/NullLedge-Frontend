import React from 'react';
import { SwipeableDrawer, TextField } from '@mui/material';
import MyEditor from '../../utils/MyEditor/MyEditor';
import Tag from '../../utils/Tag/Tag';
import './EditorPage.css';

function EditorPage(props) {
  return (
    <>
      <div className="EditorForm">
        <input type="text" id="title_txt" placeholder="제목을 입력하세요" />
        <div className="tagGroup">
          <input type="text" id="tag_txt" placeholder="태그를 입력하세요" />
          <Tag value={'2342'}></Tag>
          <Tag value={'2342'}></Tag>
          <Tag value={'2342'}></Tag>
        </div>

        <MyEditor props={'vertical'} />
      </div>
    </>
  );
}

export default EditorPage;
