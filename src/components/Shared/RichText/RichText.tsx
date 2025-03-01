import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { Box, Typography, Link } from '@mui/material';
import styled from '@emotion/styled';

interface RichTextProps {
  content: string | Document;
  className?: string;
}

const StyledContent = styled(Box)`
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    margin-top: 1.5rem;
  }
  
  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  
  ul, ol {
    margin-bottom: 1rem;
    padding-left: 2rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
  
  a {
    color: ${props => props.theme.palette.primary.main};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  img {
    max-width: 100%;
    height: auto;
    margin: 1.5rem 0;
  }
  
  blockquote {
    border-left: 4px solid ${props => props.theme.palette.divider};
    padding-left: 1rem;
    margin-left: 0;
    font-style: italic;
  }
`;

// Custom options for Rich Text rendering
const options = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text: React.ReactNode) => <em>{text}</em>,
    [MARKS.UNDERLINE]: (text: React.ReactNode) => <u>{text}</u>,
    [MARKS.CODE]: (text: React.ReactNode) => (
      <code style={{ backgroundColor: '#f0f0f0', padding: '0.2em 0.4em', borderRadius: '3px' }}>
        {text}
      </code>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => <Typography component="p">{children}</Typography>,
    [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => (
      <Typography variant="h1" component="h1">{children}</Typography>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
      <Typography variant="h2" component="h2">{children}</Typography>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => (
      <Typography variant="h3" component="h3">{children}</Typography>
    ),
    [BLOCKS.HEADING_4]: (node: any, children: React.ReactNode) => (
      <Typography variant="h4" component="h4">{children}</Typography>
    ),
    [BLOCKS.HEADING_5]: (node: any, children: React.ReactNode) => (
      <Typography variant="h5" component="h5">{children}</Typography>
    ),
    [BLOCKS.HEADING_6]: (node: any, children: React.ReactNode) => (
      <Typography variant="h6" component="h6">{children}</Typography>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => <ul>{children}</ul>,
    [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => <ol>{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => <li>{children}</li>,
    [BLOCKS.HR]: () => <hr style={{ margin: '2rem 0' }} />,
    [BLOCKS.QUOTE]: (node: any, children: React.ReactNode) => (
      <blockquote>{children}</blockquote>
    ),
    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
      <Link href={node.data.uri} target="_blank" rel="noopener noreferrer">
        {children}
      </Link>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { title, description, file } = node.data.target.fields;
      const mimeType = file?.contentType;
      const url = file?.url;
      
      if (!url) return null;
      
      if (mimeType.includes('image')) {
        return (
          <img
            src={`https:${url}`}
            alt={description || title || 'Embedded image'}
            style={{ maxWidth: '100%' }}
          />
        );
      }
      
      if (mimeType.includes('video')) {
        return (
          <video controls style={{ maxWidth: '100%' }}>
            <source src={`https:${url}`} type={mimeType} />
            Your browser does not support the video tag.
          </video>
        );
      }
      
      // For other file types, display a link
      return (
        <Link href={`https:${url}`} target="_blank" rel="noopener noreferrer">
          Download {title || 'file'}
        </Link>
      );
    },
  },
};

const RichText: React.FC<RichTextProps> = ({ content, className }) => {
  // If content is a string, try to parse it as JSON
  let documentContent: Document | null = null;
  
  if (typeof content === 'string') {
    // If it's HTML (from parseRichText), render it directly
    if (content.includes('<')) {
      return <StyledContent className={className} dangerouslySetInnerHTML={{ __html: content }} />;
    }
    
    // Try to parse JSON string
    try {
      documentContent = JSON.parse(content) as Document;
    } catch (error) {
      // If parsing fails, treat as plain text
      return <Typography>{content}</Typography>;
    }
  } else {
    // If content is already a Document
    documentContent = content;
  }
  
  // If we have a valid document, render it with the options
  if (documentContent) {
    return (
      <StyledContent className={className}>
        {documentToReactComponents(documentContent, options)}
      </StyledContent>
    );
  }
  
  // Fallback if no valid content
  return null;
};

export default RichText;