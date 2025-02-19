import { Send } from 'lucide-react';

export const Inputform = () => {
  return (
    /* TODO:
    1. focus styles for textarea and button
    2. hover styles for button
    3. Style for disabled feature
    */
    <footer className='border-t border-gray-200 p-4 bg-[#283335]'>
      <form className='flex gap-2'>
        <textarea
          placeholder='Type or paste text here...'
          className='flex-1 p-3 min-h-[80px] rounded-lg resize-none text-white text-base bg-[#15211F]'
        ></textarea>
        <button className='bg-[#27ae60] text-white rounded-full w-10 h-10 flex items-center justify-center self-center mb-2 cursor-pointer'>
          <Send className='w-5 h-5' />
        </button>
      </form>
    </footer>
  );
};
