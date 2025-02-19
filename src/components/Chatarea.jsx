import { Message } from './Message';
import PropTypes from 'prop-types';

export const Chatarea = ({ messages }) => {
  return (
    <main className='flex-1 overflow-y-auto p-4 bg-[#15211F]'>
      {messages.map((message) => (
        <Message
          key={message.id}
          message={message.text}
          content={message.text}
          detectedLand={message.language}
        />
      ))}
    </main>
  );
};

Chatarea.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.string).isRequired,
};
