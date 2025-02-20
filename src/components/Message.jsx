import PropTypes from 'prop-types';
import { detectLang, translate, summarize } from '../service/chromeapiservice';
import { useState, useEffect } from 'react';

export const Message = ({
  message,
  content,
  detectedLang,
  targetLanguage,
  setTargetLanguage,
}) => {
  const [detecting, setDetecting] = useState(false);
  const [localDetectedLang, setLocalDetectedLang] = useState(detectedLang);
  const [translation, setTranslation] = useState('');
  const [translating, setTranslating] = useState(false);
  const [summary, setSummary] = useState('');
  const [summarizing, setSummarizing] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'es', name: 'Spanish' },
    { code: 'ru', name: 'Russian' },
    { code: 'tr', name: 'Turkish' },
    { code: 'fr', name: 'French' },
  ];

  // Handle Language Detection
  useEffect(() => {
    if (!localDetectedLang) {
      detectLang(content, {
        setDetecting,
        setDetectedLang: setLocalDetectedLang,
      });
    }
  }, [content, localDetectedLang]);

  // Handle Translation
  const handleTranslate = async () => {
    if (!localDetectedLang || localDetectedLang === targetLanguage) {
      console.error(
        'Invalid translation request. Source and target languages are the same or missing.'
      );
      return;
    }

    try {
      await translate({
        detectedLangSymbol: localDetectedLang,
        targetLanguage,
        content,
        setTranslating,
        setTranslation,
      });
    } catch (error) {
      console.error('Translation failed: ', error);
      setTranslation('Translation failed.');
    }
  };

  // Handle Summarize
  const handleSummarize = async () => {
    setSummarizing(true);
    try {
      const result = await summarize(message.text);
      setSummary(result);
    } catch (error) {
      console.error('Error summarizing:', error);
    }
    setSummarizing(false);
  };

  console.log('Message language:', message.language);
  console.log('Message text length:', message.text.length);
  console.log('Summary:', summary);

  return (
    <div className='mb-8'>
      <div className='bg-[rgba(39,174,96,0.7)] p-4 rounded-lg max-w-[90%] m-auto self-start mb-4'>
        <p className='mb-2 break-words text-white'>{message.text}</p>
        <p className='text-sm text-gray-200 italic mb-2'>
          Detected lanuage: {detecting ? 'detecting...' : localDetectedLang}
        </p>
      </div>

      <div className='max-w-[90%] m-auto flex justify-between flex-wrap gap-4 -my-2 md:flex-row'>
        <button
          onClick={handleSummarize}
          aria-label='Summarize text'
          className='bg-[rgba(39,174,96,0.7)] text-white py-2 px-4 rounded text-sm transition duration-300 cursor-pointer hover:bg-white hover:text-[rgba(39,174,96,0.7)] focus:outline-none focus:ring-2 focus:ring-offset-2'
        >
          {summarizing ? 'Summarizing...' : 'Summarize'}
        </button>
        <div className='flex gap-4 items-center flex-wrap md:flex-nowrap'>
          <select
            className='p-2 text-white bg-[rgba(39,174,96,0.7)] rounded text-sm flex-1 min-w-[120px] cursor-pointer hover:bg-white hover:text-[rgba(39,174,96,0.7)] focus:outline-none focus:ring-2 focus:ring-offset-2'
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
            aria-label='Select language for translation'
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>

          <button
            onClick={handleTranslate}
            aria-label='Translate text'
            className='bg-[rgba(39,174,96,0.7)] text-white py-2 px-4 rounded text-sm transition duration-300 cursor-pointer hover:bg-white hover:text-[rgba(39,174,96,0.7)] focus:outline-none focus:ring-2 focus:ring-offset-2'
          >
            {translating ? 'Translating...' : 'Translate'}
          </button>
        </div>
      </div>

      {summary && (
        <div className='mt-4 p-4 max-w-[90%] m-auto bg-[#283335] rounded -my-4'>
          <h3 className='text-sm font-medium text-gray-400 mb-1'>Summary:</h3>
          <p className='text-gray-300'>
            {summary || 'Summarized message will appear here'}
          </p>
        </div>
      )}

      <div className='mt-6 p-4 max-w-[90%] m-auto bg-[#283335] rounded'>
        <h3 className='text-sm font-medium text-gray-400 mb-1'>Translation:</h3>
        <p className='text-gray-300'>
          {translation || 'Translated message will appear here'}
        </p>
      </div>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.shape({
    text: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
  }).isRequired,
  content: PropTypes.string.isRequired,
  detectedLang: PropTypes.string,
  targetLanguage: PropTypes.string.isRequired,
  setTargetLanguage: PropTypes.func.isRequired,
  handleTranslate: PropTypes.func.isRequired,
};
