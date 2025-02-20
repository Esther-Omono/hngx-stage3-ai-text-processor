import { Message } from './Message';
import PropTypes from 'prop-types';

export const Chatarea = ({ messages, targetLanguage, setTargetLanguage }) => {
  return (
    <main className='flex-1 overflow-y-auto p-4 bg-[#15211F]'>
      {messages.map((message) => (
        <Message
          key={message.id}
          message={message.text}
          content={message.text}
          detectedLand={message.language}
          targetLanguage={targetLanguage}
          setTargetLanguage={setTargetLanguage}
          translation={message.translation}
        />
      ))}
    </main>
  );
};

Chatarea.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      language: PropTypes.string.isRequired,
    })
  ).isRequired,
  targetLanguage: PropTypes.string.isRequired,
  setTargetLanguage: PropTypes.func.isRequired,
};
