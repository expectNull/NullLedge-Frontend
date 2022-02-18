import React, { useRef, useState } from 'react';
import MyEditor from '../../utils/MyEditor/MyEditor';
import Tag from '../../utils/Tag/Tag';
import './EditorPage.css';
import Button from '@mui/material/Button';
import axios from 'axios';

function EditorPage(props) {
  const [title, setTitle] = useState('');
  const [ProId, setProId] = useState('');
  const [html_content, setContent] = useState('');
  const tags = [];
  const editorRef = useRef();
  async function savePost() {
    const info = {
      title: title,
      tags: 'tags',
      html_content: html_content,
      user_id: 1,
      problem_id: Number(ProId),
      type_gb: 0,
      //view_cnt -> mysql 초기값 0 설정
      //kind_point_amt -> 초기값 -1 설정 VS NULL
      //PARENT_POST_ID -> NULL
    };
    console.log(html_content);
    await axios.post(process.env.REACT_APP_API_URL + '/setpost', info);
  }

  const onTitleChange = e => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const onContentChange = e => {
    const editorInstance = editorRef.current.getInstance();
    const getContent_html = editorInstance.getHTML();
    // console.log(editorInstance.getMarkdown());
    setContent(getContent_html);
  };
  const onProIdChange = e => {
    e.preventDefault();
    setProId(e.target.value);
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
            id="problem_id_txt"
            placeholder="문제 번호 입력"
            onChange={onProIdChange}
          />

          <input
            type="text"
            id="tag_txt"
            placeholder="태그 입력"
            onKeyPress={appKeyPress}
          />
        </div>
        <MyEditor
          props={'vertical'}
          refProps={editorRef}
          changeProps={onContentChange}
        />
        <br />
        <Button id="save_btn" onClick={handleSave} variant="contained">
          Save
        </Button>
      </div>
    </>
  );
}

export default EditorPage;
