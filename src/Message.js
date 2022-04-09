import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import './Message.css';

function Message({ message, username }) {
  const isUser = username === message.username;
  return (
    <Card className={`message ${isUser && 'message__user'}`}>
      <CardContent>
        <Typography color='black' variant='h5' component='h2'>
          {message.username}:{message.text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Message;
