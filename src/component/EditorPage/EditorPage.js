import React, { useRef, useState } from 'react';
import MyEditor from '../../utils/MyEditor/MyEditor';
import Tag from '../../utils/Tag/Tag';
import './EditorPage.css';
import Button from '@mui/material/Button';
import axios from 'axios';

function EditorPage(props) {
  const [title, setTitle] = useState('');
  const [html_content, setContent] = useState('');
  const tags = [];
  const editorRef = useRef();
  async function savePost() {
    const info = {
      title: title,
      tags: tags,
      html_content: html_content,
      user_id: 'tmp_id',
    };
    await axios.post(process.env.REACT_APP_API_URL + '/setpost', info);
  }

  const onTitleChange = e => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const onContentChange = e => {
    const editorInstance = editorRef.current.getInstance();
    const getContent_html = editorInstance.getHTML();
    setContent(getContent_html);
  };
  const handleSave = () => {
    savePost();
  };
  const appKeyPress = e => {
    if (e.key === 'Enter') {
      alert('33');
    }
  };
  return (
    <>
      <div className="EditorForm">
        <input
          type="text"
          id="title_txt"
          placeholder="제목을 입력하세요"
          onChange={onTitleChange}
          value={title}
        />
        <div className="tagGroup">
          <input
            type="text"
            id="tag_txt"
            placeholder="태그를 입력하세요"
            onKeyPress={appKeyPress}
          />
        </div>

        <MyEditor
          props={'vertical'}
          refProps={editorRef}
          changeProps={onContentChange}
        />
        <Button id="save_btn" onClick={handleSave} variant="contained">
          Save
        </Button>
      </div>
    </>
  );
}

export default EditorPage;
