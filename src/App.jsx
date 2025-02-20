import { useState } from 'react';
import { Chatarea } from './components/Chatarea';
import { Header } from './components/Header';
import { Inputform } from './components/Inputform';
import { detectLang } from './service/chromeapiservice';
import { languageOptions } from './utils/languageutils';

function App() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const [detecting, setDetecting] = useState(false);
  const [detectedLangSymbol, setDetectedLangSymbol] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('en');

  const handleSubmit = async (text) => {
    if (!text.trim()) {
      setError('Please enter some text');
      return;
    }

    try {
      const langCallbacks = {
        setDetecting,
        setDetectedLangSymbol,
      };

      await detectLang(text, langCallbacks);

      const detectedLanguage = languageOptions[detectedLangSymbol];

      const messageObj = {
        id: Date.now(),
        text: text,
        language: detectedLanguage,
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
        targetLanguage={targetLanguage}
        setTargetLanguage={setTargetLanguage}
      />
      <Inputform onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
