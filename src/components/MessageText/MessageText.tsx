'use client';

import React from 'react';

interface MessageTextProps {
  content: string;
}

export const MessageText: React.FC<MessageTextProps> = ({ content }) => {
  const parts = content.split(/(https?:\/\/[^\s]+)/g);

  return (
    <div className="text-sm leading-relaxed text-white space-y-1 break-words">
      {parts.map((part, i) =>
        /^https?:\/\//.test(part) ? (
          <div key={i}>
            <a
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300 break-all"
            >
              {part}
            </a>
          </div>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </div>
  );
};
