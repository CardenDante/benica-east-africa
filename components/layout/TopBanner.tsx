import React from 'react';

const TopBanner: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-black text-white py-2 px-4 z-[60]">
      <div className="container-custom flex flex-col sm:flex-row justify-between items-center text-sm">
        {/* Address */}
        <div className="text-center sm:text-left mb-1 sm:mb-0">
          <span className="text-white">
            Mezzanine Floor, International Life House, Mama Ngina Street, Nairobi
          </span>
        </div>
        
        {/* Phone Numbers */}
        <div className="text-center sm:text-right">
          <span className="text-white">
            +254 723 526 211 | +254 720 976 613
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;