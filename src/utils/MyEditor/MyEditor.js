import React, { useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import './MyEditor.css';

import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

function MyEditor({ props, changeProps, refProps }) {
  return (
    <div className="Editor">
      <Editor
        initialValue="# 내용을 입력해주세요."
        previewStyle={props}
        plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
        width="100vh"
        height="75vh"
        onChange={changeProps}
        ref={refProps}
      />
    </div>
  );
}

export default MyEditor;
