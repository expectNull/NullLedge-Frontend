import React, { useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import './MyEditor.css';

import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import Button from '@mui/material/Button';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

function MyEditor({ props }) {
  const editorRef = useRef();
  const handleSave = () => {
    const editorInstance = editorRef.current.getInstance();
    const getContent_md = editorInstance.getMarkdown();
    console.log('--마크다운--');
    console.log(getContent_md);
    const getContent_html = editorInstance.getHTML();
    console.log('--HTML--');
    console.log(getContent_html);
  };
  return (
    <div className="Editor">
      <Editor
        initialValue="# 내용을 입력해주세요."
        previewStyle={props}
        plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
        width="100vh"
        height="75vh"
        ref={editorRef}
      />

      <Button id="save_btn" onClick={handleSave} variant="contained">
        Save
      </Button>
    </div>
  );
}

export default MyEditor;
