import PropTypes from 'prop-types';
import { detectLang } from '../service/chromeapiservice';
import { useState, useEffect } from 'react';

export const Message = ({ message, content, detectedLang }) => {
  const [detecting, setDetecting] = useState(false);
  const [localDetectedLang, setLocalDetectedLang] = useState(detectedLang);

  // Handle Language Detection
  useEffect(() => {
    const detectionCallbacks = {
      setDetecting,
      setDetectedLang: setLocalDetectedLang,
    };

    detectLang(content, detectionCallbacks);
  }, [content]);

  return (
    /* TODO:
    1. Hover and Focus style for buttons
    2. Style for disabled feature
    3. Add aria labels for accesibility
     */
    <div className='mb-8'>
      <div className='bg-[rgba(39,174,96,0.7)] p-4 rounded-lg max-w-[90%] m-auto self-start mb-4'>
        <p className='mb-2 break-words text-white'>{message}</p>
        <p className='text-sm text-gray-200 italic mb-2'>
          Detected lanuage: {detecting ? 'detecting...' : localDetectedLang}
        </p>
      </div>

      <div className='max-w-[90%] m-auto flex justify-between flex-wrap gap-4 -my-2 md:flex-row'>
        <button className='bg-[rgba(39,174,96,0.7)] text-white py-2 px-4 rounded text-sm transition duration-300 cursor-pointer'>
          Summarize
        </button>

        <div className='flex gap-4 items-center flex-wrap md:flex-nowrap'>
          <select className='p-2 text-white bg-[rgba(39,174,96,0.7)] rounded text-sm flex-1 min-w-[120px] cursor-pointer'>
            <option>English</option>
            <option>Portuguese</option>
            <option>Spanish</option>
            <option>Russian</option>
            <option>Turkish</option>
            <option>French</option>
          </select>

          <button className='bg-[rgba(39,174,96,0.7)] text-white py-2 px-4 rounded text-sm transition duration-300 cursor-pointer'>
            Translate
          </button>
        </div>
      </div>

      <div className='mt-4 p-4 max-w-[90%] m-auto bg-[#283335] rounded -my-4'>
        <h3 className='text-sm font-medium text-gray-400 mb-1'>Summary:</h3>
        <p className='text-gray-300'>Summarized message</p>
      </div>

      <div className='mt-6 p-4 max-w-[90%] m-auto bg-[#283335] rounded'>
        <h3 className='text-sm font-medium text-gray-400 mb-1'>Translation</h3>
        <p className='text-gray-300'>Translated Message</p>
      </div>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  detectedLang: PropTypes.string,
};
