import React from 'react';
import { TextField } from '@mui/material';
import MyEditor from '../../utils/MyEditor/MyEditor';
import Tag from '../../utils/Tag/Tag';
import './EditorPage.css';

function EditorPage(props) {
  return (
    <>
      <div className="EditorForm">
        <TextField
          fullWidth
          required
          id="title_textfield"
          label="제목을 입력하세요"
          variant="standard"
          // size="medium"
        />
        <TextField
          fullWidth
          required
          id="title_textfield"
          label="태그를 입력하세요"
          variant="standard"
          size="small"
        />

        <MyEditor props={'vertical'} />
      </div>
    </>
  );
}

export default EditorPage;
