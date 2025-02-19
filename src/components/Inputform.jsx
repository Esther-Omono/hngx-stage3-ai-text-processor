import { Send } from 'lucide-react';

export const Inputform = () => {
  return (
    /* TODO:
    1. focus styles for textarea and button
    2. hover styles for button
    */
    <footer className='border-t border-gray-200 p-4 bg-white'>
      <form className='flex gap-2'>
        <textarea
          placeholder='Type or paste text here...'
          className='flex-1 p-3 min-h-[80px] border border-gray-300 rounded-lg resize-none text-base'
        ></textarea>
        <button className='bg-[#2980b9] text-white rounded-full w-10 h-10 flex items-center justify-center self-center mb-2 cursor-pointer'>
          <Send className='w-5 h-5' />
        </button>
      </form>
    </footer>
  );
};
