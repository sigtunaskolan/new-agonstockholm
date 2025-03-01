import React from 'react';
import styled from '@emotion/styled';

const RichTextContainer = styled.div`
  & a {
    color: var(--secondary);
    text-decoration: none;
    transition: opacity 0.3s ease;
    
    &:hover {
      opacity: 0.8;
    }
  }
  
  & p {
    margin-bottom: 1.2rem;
  }
  
  & strong {
    font-weight: 600;
  }
  
  & em {
    font-style: italic;
  }
  
  & ul, & ol {
    margin-left: 1.5rem;
    margin-bottom: 1.5rem;
    
    & li {
      margin-bottom: 0.5rem;
    }
  }
  
  & h1, & h2, & h3, & h4, & h5, & h6 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-weight: 600;
    line-height: 1.3;
  }
`;

type RichTextProps = {
  content: string;
};

const RichText: React.FC<RichTextProps> = ({ content }) => {
  return (
    <RichTextContainer dangerouslySetInnerHTML={{ __html: content }} />
  );
};

export default RichText;