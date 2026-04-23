'use client';

import React from 'react';
import { marked } from 'marked';

interface MarkdownContentProps {
  content: string;
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ content }) => {
  const htmlContent = marked.parse(content);

  return (
    <div 
      className="markdown-content text-gray-700 leading-relaxed space-y-6"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default MarkdownContent;