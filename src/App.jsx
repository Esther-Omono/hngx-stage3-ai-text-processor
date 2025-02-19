import { useState } from 'react';
import { Chatarea } from './components/Chatarea';
import { Header } from './components/Header';
import { Inputform } from './components/Inputform';
import { detectLang } from './service/chromeapiservice';

function App() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const [detecting, setDetecting] = useState(false);
  const [detectedLangSymbol, setDetectedLangSymbol] = useState('');
  const [detectedLang, setDetectedLang] = useState('');

  const handleSubmit = async (text) => {
    if (!text.trim()) {
      setError('Please enter some text');
      return;
    }

    try {
      await detectLang(text, {
        setDetecting,
        setDetectedLangSymbol,
        setDetectedLang,
      });
      const messageObj = {
        id: Date.now(),
        text: text,
        language: detectedLang,
      };
      setMessages([...messages, messageObj]);
    } catch (err) {
      setError('Failed to process your message. Please try again.');
      console.error('Error: ', err);
    }
  };
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <Chatarea
        messages={messages}
        error={error}
        detecting={detecting}
        detectedLangSymbol={detectedLangSymbol}
      />
      <Inputform onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
