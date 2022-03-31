import React from 'react';
import './PostViewer.css';
import { Viewer } from '@toast-ui/react-editor';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

function PostViewer({ content }) {
  return <Viewer className="MyViewer" initialValue={content} />;
  // return (
  //   <ReactMarkdown
  //     children={content}
  //     className="MyViewer"
  //     components={{
  //       code({ node, inline, className, children, ...props }) {
  //         const match = /language-(\w+)/.exec(className || '');
  //         return !inline && match ? (
  //           <SyntaxHighlighter
  //             children={String(children).replace(/\n$/, '')}
  //             // style={darcula}
  //             language={match[1]}
  //             PreTag="div"
  //             {...props}
  //           />
  //         ) : (
  //           <code className={className} {...props}>
  //             {children}
  //           </code>
  //         );
  //       },
  //     }}
  //   />
  // );
}

export default PostViewer;
