import React from 'react';
import styled from '@emotion/styled';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

interface LoadingProps {
  message?: string;
  fullScreen?: boolean;
}

const LoadingContainer = styled(Box)<{ fullScreen?: boolean }>(({ fullScreen }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '30px',
  ...(fullScreen && {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1000,
  }),
}));

const Loading: React.FC<LoadingProps> = ({ message, fullScreen }) => {
  const t = useTranslations('Common');
  
  return (
    <LoadingContainer fullScreen={fullScreen}>
      <CircularProgress size={40} />
      <Box mt={2}>
        <Typography variant="body1" color={fullScreen ? 'white' : 'inherit'}>
          {message || t('loading')}
        </Typography>
      </Box>
    </LoadingContainer>
  );
};

export default Loading;