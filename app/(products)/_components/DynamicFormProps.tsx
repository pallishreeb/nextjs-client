"use client"
// components/DynamicForm.tsx
import { useState } from 'react';
import formFields from "../_components/formFields"
import { useRouter } from 'next/router';

interface DynamicFormProps {
  formType: string;
}

const DynamicForm: React.FC<DynamicFormProps> = ({formType}) => {

  const filteredFields = formFields.filter((field :any) => field.formType === formType);
  const isOddLength = filteredFields.length % 2 !== 0;

  const [formData, setFormData] = useState({});
  const [userData, setUserData] = useState({});


  const handleInputChange = (fieldName: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleUserInputChange = (fieldName: string, value: string) => {
    setUserData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // try {
    //   const response = await fetch(`${API_URL}/client/requirement`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       formType,
    //       formData,
    //       userData,
    //     }),
    //   });

    //   if (response.ok) {
    //     setIsSuccess(true);
    //     setShowAlert(true);
    //     console.log('Form submitted successfully!', formData, userData);
    //   } else {
    //     setIsSuccess(false);
    //     setShowAlert(true);
    //     console.error('Form submission failed.');
    //   }
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    // }
  };

  return (
    <>
      <form className="my-4 mx-auto max-w-md lg:max-w-lg xl:max-w-xl" onSubmit={handleSubmit}>
        {/* Constant fields */}
        {filteredFields.length > 0 &&
        <>
        <h4 className='text-center text-white p-1 bg-gray-800'>Post your product requirement</h4>
        <div className="grid bg-gray-100 grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="First Name"
              onChange={(e) => handleUserInputChange('firstName', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Last Name"
              onChange={(e) => handleUserInputChange('lastName', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="text"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Your Email"
              onChange={(e) => handleUserInputChange('email', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Your Phone Number"
              onChange={(e) => handleUserInputChange('phoneNumber', e.target.value)}
            />
          </div>
        </div>
        </>
        }
        {/* Dynamic fields */}
        <div className={`grid bg-gray-100 grid-cols-1 gap-4 lg:grid-cols-2`}>
          {filteredFields.map((field:any, index:any) => (
            <div
              key={field.name}
              className={`mb-4 ${index === filteredFields.length - 1 && isOddLength ? 'lg:col-span-2' : 'lg:col-span-1'}`}
            >
              <label className="block text-sm font-medium text-gray-700 mb-1">{field.name}</label>
              {field.type === 'input' && (
                <input
                  type="text"
                  className="mt-1 p-2 border rounded-md w-full"
                  placeholder={field.placeholder}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                />
              )}
              {field.type === 'dropdown' && (
                <select
                  className="mt-1 p-2 border rounded-md w-full"
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                >
                  <option>Choose From List</option>
                  {field.options.map((option:any) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
              {/* Add other field types as needed */}
            </div>
          ))}
        </div>
        {filteredFields.length > 0 &&
        <button type="submit" className="w-full bg-gray-800 text-white py-2 px-4 rounded-md mx-auto block">
          SUBMIT REQUIREMENTS
        </button>}
      </form>
    </>
  );
};

export default DynamicForm;
