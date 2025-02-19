import { Message } from './Message';
import PropTypes from 'prop-types';

export const Chatarea = ({ messages }) => {
  return (
    <main className='flex-1 overflow-y-auto p-4 bg-[#15211F]'>
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </main>
  );
};

Chatarea.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.string).isRequired,
};
