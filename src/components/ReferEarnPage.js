import React, { useState } from 'react';
import ReferralForm from './ReferEarnForm';
import { ImCancelCircle } from "react-icons/im";

const ReferEarnPage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className=" bg-cover mx-5 md:mx-20 bg-center font-serif py-8 pb-20 rounded-lg shadow-lg shadow-red-300" style={{ backgroundImage: "url('/bg.png')" }}>
      <div className='ml-4 xl:ml-20 pt-36'>
        <h1 className=" text-4xl sm:text-7xl   font-bold mb-4">Refer & Earn</h1>
        <p className="text-xl sm:text-2xl mb-6">Refer a friend and earn rewards <br /> and get a chance to win upto <span className='text-green-600 font-semibold'>15,000 !</span></p>
        <button
          className="bg-gradient-to-b from-green-500 to-green-700 hover:shadow-black hover:shadow-md text-white font-bold py-2 px-4 rounded"
          onClick={handleOpen}
        >
          Refer Now
        </button>
        {open && (
            <div className=''>
                <div className="fixed inset-0 mx- flex items-center justify-center bg-black bg-opacity-60">
                    <div className="bg-gradient-to-b from-red-200 to-red-300 hover:shadow-black hover:shadow-md  p-6 rounded-lg">
                    <div className='text-center'>
                        <button
                            className=" top-20 right-2 text-center justify-center content-center w-10 h-10 rounded-full bg-black text-white "
                            onClick={handleClose}
                        >
                        <ImCancelCircle className='w-10 h-10' />
                        </button>
                    </div>
                    <ReferralForm onClose={handleClose} />
                    </div>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default ReferEarnPage;
