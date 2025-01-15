import React, { useState } from 'react';
import CloudinaryUploadWidget from '../components/CloudinaryUploadWidget';

const PetListingForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-16"> 
      <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-pink-500 mb-8">
          List a Pet for Adoption
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-1">
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Upload Pet's Photo
            </label>
<CloudinaryUploadWidget/>
          </div>

          {/* Form Fields (on the right) */}
          <div className="md:col-span-1">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-gray-600 text-sm font-medium mb-2">
                Title
              </label>
              <input
                type="text"
                placeholder="Add a title"
                id="title"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-pink-500 h-12"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="mt-2 block text-gray-600 text-sm font-medium mb-2">
                Description
              </label>
              <textarea
                id="description"
                placeholder="Add a detailed description"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-pink-500 h-64" 
              ></textarea>
            </div>
          </div>

          {/* Breed, Age, Vaccination Status, and Location (full width) */}
          <div className="md:col-span-2 flex gap-2 flex-col">
            {/* Breed */}
            <div>
              <label htmlFor="breed" className="block text-gray-600 text-sm font-medium mb-2">
                Type of pet
              </label>
              <input
                type="text"
                placeholder="Dog/Cat/Rabbit"
                id="breed"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-pink-500 h-12"
              />
            </div>
            <div>
              <label htmlFor="breed" className="block text-gray-600 text-sm font-medium mb-2">
                Breed
              </label>
              <input
                type="text"
                placeholder="Enter breed"
                id="breed"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-pink-500 h-12"
              />
            </div>

            {/* Age */}
            <div>
              <label htmlFor="age" className="block text-gray-600 text-sm font-medium mb-2">
                Age
              </label>
              <input
                type="number"
                placeholder="Enter age"
                id="age"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-pink-500 h-12"
              />
            </div>

            {/* Vaccination Status */}
            <div>
              <label htmlFor="vaccinationStatus" className="block text-gray-600 text-sm font-medium mb-2">
                Vaccination Status
              </label>
              <select
                id="vaccinationStatus"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-pink-500 h-12"
              >
                <option value="">Select</option>
                <option value="vaccinated">Vaccinated</option>
                <option value="not_vaccinated">Not Vaccinated</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-gray-600 text-sm font-medium mb-2">
                Location
              </label>
              <input
                type="text"
                placeholder="Add a location"
                id="location"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-pink-500 h-12"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-md mt-8 w-full"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default PetListingForm;