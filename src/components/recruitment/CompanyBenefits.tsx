
import React from "react";

const CompanyBenefits = () => {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Why Join NexZap Studio?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="mx-auto w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-500 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          </div>
          <h3 className="font-semibold mb-2">Creative Environment</h3>
          <p className="text-gray-600">Work in a vibrant, creative atmosphere where your ideas matter.</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="mx-auto w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-500 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
          </div>
          <h3 className="font-semibold mb-2">Grow Your Skills</h3>
          <p className="text-gray-600">Continuous learning and development opportunities for all team members.</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="mx-auto w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-500 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h3 className="font-semibold mb-2">Amazing Team</h3>
          <p className="text-gray-600">Join a talented, diverse team passionate about creating great games.</p>
        </div>
      </div>
      
      <p className="text-gray-600">
        Can't find a position that matches your skills? We're always looking for talented individuals.
        Send us your resume at <span className="text-orange-500 font-medium">careers@nexzap.studio</span>
      </p>
    </div>
  );
};

export default CompanyBenefits;
