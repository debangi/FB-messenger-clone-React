import { FormControl, Input } from '@mui/material';
import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import Message from './Message';
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';

import './App.css';
import db from './firebase';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.Timestamp.now(),
    });
    setInput('');
  };

  return (
    <div className='App'>
      <img
        src='https://scontent.fccu3-1.fna.fbcdn.net/v/t1.6435-1/121144316_4235843479868633_1561909311908486242_n.png?stp=dst-png_p148x148&_nc_cat=1&ccb=1-5&_nc_sid=1eb0c7&_nc_ohc=t8smNsuRNuEAX98yy3N&_nc_oc=AQmtRuadyDGeXOAt7yTD02AnTwsA8YHjG3jI3sVf_iWldmeMKL4ZLDYzrz0PTLsyiwM&_nc_ht=scontent.fccu3-1.fna&oh=00_AT9bcqu4cMwG4-LfKVlDgbGzw7e3s9Gt9Wrby7ZuHub8JQ&oe=62791172'
        alt='messenger'
      />
      <h2>
        Messenger Clone by <span className='creator'>Debangi</span>
      </h2>
      <h3>Welcome {username}</h3>
      <form className='app__form'>
        <FormControl className='app__formControl'>
          <Input
            className='app__input'
            placeholder='Enter a message...'
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <IconButton
            className='app__iconButton'
            disabled={!input}
            variant='contained'
            color='primary'
            type='submit'
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
