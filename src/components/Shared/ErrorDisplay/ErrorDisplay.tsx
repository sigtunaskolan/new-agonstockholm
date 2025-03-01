import React from 'react';
import styled from '@emotion/styled';
import { Alert, AlertTitle, Box, Button } from '@mui/material';
import { useTranslations } from 'next-intl';

interface ErrorDisplayProps {
  message?: string;
  onRetry?: () => void;
  severity?: 'error' | 'warning' | 'info' | 'success';
}

const ErrorContainer = styled(Box)(() => ({
  padding: '20px',
  margin: '20px 0',
  textAlign: 'center',
}));

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ 
  message, 
  onRetry,
  severity = 'error'
}) => {
  const t = useTranslations('Error');
  
  return (
    <ErrorContainer>
      <Alert severity={severity}>
        <AlertTitle>{t('title')}</AlertTitle>
        {message || t('defaultMessage')}
      </Alert>
      {onRetry && (
        <Box mt={2}>
          <Button 
            variant="contained" 
            onClick={onRetry}
          >
            {t('retry')}
          </Button>
        </Box>
      )}
    </ErrorContainer>
  );
};

export default ErrorDisplay;