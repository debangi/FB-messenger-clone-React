import { Button, FormControl, Input, InputLabel } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { username: 'debs', text: 'hello people' },
  ]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    // all the logic to send a message goes here
    setMessages([...messages, { username, text: input }]);
    setInput('');
  };

  return (
    <div className='App'>
      <h1>Welcome to the Facebook Messenger Clone</h1>
      <h2>Welcome {username}</h2>
      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <Button
            disabled={!input}
            variant='contained'
            color='primary'
            type='submit'
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </FormControl>
      </form>

      {messages.map((message) => (
        <Message username={username} message={message} />
        // <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
