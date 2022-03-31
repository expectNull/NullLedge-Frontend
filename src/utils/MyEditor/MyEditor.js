import React from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import './MyEditor.css';

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'prismjs/components/prism-python.js';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

function MyEditor({
  // initialProps,
  previewProps,
  widthProps,
  refProps,
  heightProps,
}) {
  return (
    <div className="Editor">
      <Editor
        placeholder="# 답변을 작성해주세요."
        // initialValue={initialProps}
        previewStyle={previewProps}
        plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
        width={widthProps}
        height={heightProps}
        ref={refProps}
      />
    </div>
  );
}

export default MyEditor;
