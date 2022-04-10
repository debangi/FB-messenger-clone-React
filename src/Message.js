import React, { forwardRef } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './Message.css';

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;

  return (
    <div className={`message ${isUser && 'message__user'}`}>
      <div className='from'>
        {!isUser && `${message.username || 'unknown user'}`}
      </div>
      <Card
        ref={ref}
        className={`${isUser ? 'message__userCard' : 'message__guestCard'}`}
      >
        <CardContent className='card__content'>
          <Typography color='black' variant='h6' component='h2'>
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
