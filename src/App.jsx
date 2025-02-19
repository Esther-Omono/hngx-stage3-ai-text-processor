import { useState } from 'react';
import { Chatarea } from './components/Chatarea';
import { Header } from './components/Header';
import { Inputform } from './components/Inputform';

function App() {
  const [messages, setMessages] = useState([]);

  const handleSubmit = (text) => {
    setMessages([...messages, text]);
  };
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <Chatarea messages={messages} />
      <Inputform onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
