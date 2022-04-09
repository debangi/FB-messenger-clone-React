import React, { forwardRef } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './Message.css';

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;

  return (
    <Card
      ref={ref}
      className={`message ${isUser ? 'message__user' : 'message__guest'}`}
    >
      <CardContent>
        <Typography color='black' variant='h5' component='h2'>
          {!isUser && `${message.username || 'unknown user'}:`}
          {message.message}
        </Typography>
      </CardContent>
    </Card>
  );
});

export default Message;
