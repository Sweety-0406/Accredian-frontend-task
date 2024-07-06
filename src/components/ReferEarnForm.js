import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const ReferralForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("process.env.REACT_APP_BACKEND_URL")
      console.log(process.env.REACT_APP_BACKEND_URL)
      console.log("process.env.REACT_APP_BACKEND_URL")
      
      const response = await axios.post(process.env.REACT_APP_BACKEND_URL, formData);
      console.log(formData);
      if (response.status === 201) {
        console.log("success");
        toast.success('Referral submitted successfully!');
        onClose();
      }
    } catch (error) {
      console.error('Error submitting referral:', error);
      toast.error('Failed to submit referral');
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-96 ">
      <h2 className="text-2xl font-bold mb-4">Referral Form</h2>
      <div>
        <label htmlFor="referrerName" className="block text-sm font-medium text-gray-700">
          Your Name
        </label>
        <input
          type="text"
          id="referrerName"
          name="referrerName"
          value={formData.referrerName}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="referrerEmail" className="block text-sm font-medium text-gray-700">
          Your Email
        </label>
        <input
          type="email"
          id="referrerEmail"
          name="referrerEmail"
          value={formData.referrerEmail}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="refereeName" className="block text-sm font-medium text-gray-700">
          Friend's Name
        </label>
        <input
          type="text"
          id="refereeName"
          name="refereeName"
          value={formData.refereeName}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="refereeEmail" className="block text-sm font-medium text-gray-700">
          Friend's Email
        </label>
        <input
          type="email"
          id="refereeEmail"
          name="refereeEmail"
          value={formData.refereeEmail}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="w-full py-2 px-4 bg-gradient-to-b from-green-500 to-green-700 hover:shadow-black hover:shadow-md text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ReferralForm;
