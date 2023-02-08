import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

interface EditorProps {
    language?: any,
    children?: any,
}

export const Editor = ( { language, children }: EditorProps ) => {
    return (
        <Highlight
            {...defaultProps} code={children} language={language}>
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div key={i} {...getLineProps({ line, key: i })}>
            <span>{i + 1}</span>
            <span>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </span>
          </div>
        ))}
      </pre>
    )}
        </Highlight>
    )
}