import React, { useState } from 'react';
import ReferralForm from './ReferEarnForm';
import { FaUserPlus } from "react-icons/fa";
import { PiNotepadFill } from "react-icons/pi";
import { PiHandCoinsBold } from "react-icons/pi";
import { ImCancelCircle } from "react-icons/im";

const ReferStep = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className=" bg-red-400 mt-10 pb-10 ">
      <div className='ml-4 xl:ml-20 pt-10'>
      <div className='text-center pb-16'>
        <p>How Do I <span className='font-semibold text-green-600'>Refer</span></p>
      </div>
        <div className='flex justify-center  mx-[10%]'>
            <div className=' border-l-4 border-dashed border-l-green-500 border-b-green-700 border-b-4 rounded-full'>
                <div className='m-10  w-20 h-20 md:w-40 md:h-40 shadow-lg shadow-white  rounded-full'>
                    <div className='p-2 pt-6'>
                        <div>
                            <FaUserPlus className="text-center justify-center mx-auto w-10 h-10" />
                        </div>
                        <div className='hidden md:block text-center text-xs'>
                            <p>Submit referrals easily via <br /> our website's referral <br /> section</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' border-t-4 border-b-4 border-dashed border-t-green-700 border-b-green-500 rounded-full'>
            <div className='m-10  w-20 h-20 md:w-40 md:h-40 shadow-lg shadow-white  rounded-full'>
                    <div className='p-2 pt-6'>
                        <div>
                            <PiNotepadFill className="text-center justify-center mx-auto w-10 h-10" />
                        </div>
                        <div className='hidden md:block text-center text-xs'>
                            <p>Earn rewards once your <br /> referral joins an Accredian <br /> program</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-t-4 border-r-4 border-dashed border-t-green-500 border-r-green-700 rounded-full'>
            <div className='m-10  w-20 h-20 md:w-40 md:h-40 shadow-lg shadow-white  rounded-full'>
                    <div className='p-2 pt-6'>
                        <div>
                            <PiHandCoinsBold className="text-center justify-center mx-auto w-10 h-10"/>
                        </div>
                        <div className='hidden md:block text-center text-xs'>
                            <p>Both parties receive a <br /> bonus 30 days after <br /> program enrollment</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='text-center mt-10'>
            <button
            className="bg-gradient-to-b from-green-500 to-green-700 hover:shadow-black hover:shadow-md text-white font-bold py-2 px-4 rounded"
            onClick={handleOpen}
            >
            Refer Now
            </button>
        </div>
        {open && (
            <div className=''>
                <div className="fixed inset-0 mx- flex items-center justify-center bg-black bg-opacity-60">
                    <div className="bg-gradient-to-b from-red-200 to-red-300 hover:shadow-black hover:shadow-md p-6 rounded-lg">
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

export default ReferStep;
