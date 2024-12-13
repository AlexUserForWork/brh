import React, { useState } from 'react';

const FullscreenPopup = ({ setIsPlayMusic }) => {
   const [isOpen, setIsOpen] = useState(true);

   return (
      <>
         {isOpen && (
            <div className='fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50'>
               <div className='bg-white p-6 rounded-lg text-center w-full max-w-md mx-auto gap-8'>
                  <img
                     src='https://via.placeholder.com/150'
                     alt='Popup Content'
                     className='mx-auto mb-4'
                  />

                  <div className='flex justify-center gap-4 pt-8'>
                     <button
                        onClick={() => {
                           setIsPlayMusic(true);
                           setIsOpen(false);
                        }}
                        className='px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600'
                     >
                        Close
                     </button>
                     <a
                        href='https://x.com/BruuuhSol'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
                     >
                        Go to Link
                     </a>
                  </div>
               </div>
            </div>
         )}
      </>
   );
};

export default FullscreenPopup;
