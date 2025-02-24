import React, { useState } from "react";
import { PawPrint } from "lucide-react";
import CloudinaryUploadWidget from "../components/CloudinaryUploadWidget";

const PetListingForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">List a Pet for Adoption</h2>
      <div className="bg-white p-6 rounded-lg shadow-md grid md:grid-cols-2 gap-6">
        <form className="grid md:grid-cols-2 gap-6 w-full">
          {/* Upload Pet's Photo */}
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Upload Pet's Photo
            </label>
            <CloudinaryUploadWidget />
          </div>

          {/* Form Fields (on the right) */}
          <div className="md:col-span-1">
            <div>
              <label htmlFor="title" className="block text-gray-600 text-sm font-medium mb-2">
                Title
              </label>
              <input type="text" placeholder="Add a title" id="title" className="w-full p-2 border border-gray-300 rounded-md focus:outline-pink-500 h-12" />
            </div>
            <div>
              <label htmlFor="description" className="mt-5 block text-gray-600 text-sm font-medium mb-2 ">
                Description
              </label>
              <textarea id="description" placeholder="Add a detailed description" className="w-full p-2 border border-gray-300 rounded-md focus:outline-pink-500 h-56"></textarea>
            </div>
          </div>

          {/* Additional Details */}
          <div className="md:col-span-2 flex gap-2 flex-col">
            <div>
              <label htmlFor="type" className="block text-gray-600 text-sm font-medium mb-2">
                Type of pet
              </label>
              <input type="text" placeholder="Dog/Cat/Rabbit" id="type" className="w-full p-2 border border-gray-300 rounded-md focus:outline-pink-500 h-12" />
            </div>
            <div>
              <label htmlFor="breed" className="block text-gray-600 text-sm font-medium mb-2">
                Breed
              </label>
              <input type="text" placeholder="Enter breed" id="breed" className="w-full p-2 border border-gray-300 rounded-md focus:outline-pink-500 h-12" />
            </div>
            <div>
              <label htmlFor="age" className="block text-gray-600 text-sm font-medium mb-2">
                Age
              </label>
              <input type="number" placeholder="Enter age" id="age" className="w-full p-2 border border-gray-300 rounded-md focus:outline-pink-500 h-12" />
            </div>
            <div>
              <label htmlFor="vaccinationStatus" className="block text-gray-600 text-sm font-medium mb-2">
                Vaccination Status
              </label>
              <select id="vaccinationStatus" className="w-full p-2 border border-gray-300 rounded-md focus:outline-pink-500 h-12">
                <option value="">Select</option>
                <option value="vaccinated">Vaccinated</option>
                <option value="not_vaccinated">Not Vaccinated</option>
              </select>
            </div>
            <div>
              <label htmlFor="location" className="block text-gray-600 text-sm font-medium mb-2">
                Location
              </label>
              <input type="text" placeholder="Add a location" id="location" className="w-full p-2 border border-gray-300 rounded-md focus:outline-pink-500 h-12" />
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-md mt-8 flex items-center gap-2">
              <PawPrint className="w-5 h-5" />
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PetListingForm;
