import { Send } from 'lucide-react';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const Inputform = ({ onSubmit }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      onSubmit(inputText);
      setInputText('');
    }
  };

  return (
    /* TODO:
    1. focus styles for textarea and button
    2. hover styles for button
    3. Style for disabled feature
    */
    <footer className='p-4 bg-[#283335]'>
      <form onSubmit={handleSubmit} className='flex gap-2'>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          aria-label='Text input area'
          placeholder='Type or paste text here...'
          className='flex-1 p-3 min-h-[80px] rounded-lg resize-none text-white text-base bg-[#15211F] focus:outline-none focus:ring-2 focus:ring-[rgba(39,174,96,0.7)]'
        ></textarea>
        <button
          type='submit'
          aria-label='Send message'
          className='bg-[rgba(39,174,96,0.7)] text-white rounded-full w-10 h-10 flex items-center justify-center self-center mb-2 cursor-pointer hover:bg-white hover:text-[rgba(39,174,96,0.7)]'
        >
          <Send className='w-5 h-5' />
        </button>
      </form>
    </footer>
  );
};

Inputform.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
