'use client';

import { useState, useRef, useEffect } from 'react';

const AfricaMap2D = ({ offices, onSelectOffice }) => {
  const [hoveredOffice, setHoveredOffice] = useState(null);
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Check if image is already cached/loaded
    if (imgRef.current && imgRef.current.complete) {
      setImageLoaded(true);
    }
  }, []);

  // Office positions on the map image (corrected based on user annotations)
  const officePositions = {
    'Ghana': { x: 30, y: 40, label: 'Ghana' },
    'Nigeria': { x: 40, y: 40, label: 'Nigeria' },
    'Kenya': { x: 76, y: 50, label: 'Kenya' },
    'South Africa': { x: 55, y: 82, label: 'South Africa' }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-white rounded-xl p-4">
      {/* Map container with fixed aspect ratio */}
      <div 
        ref={containerRef}
        className="relative w-full"
        style={{ aspectRatio: '1 / 1' }}
      >
        {/* Africa Map Image */}
        <img 
          ref={imgRef}
          src="/africa-map.jpg" 
          alt="Map of Africa" 
          className="absolute inset-0 w-full h-full object-contain"
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Office Pin Markers - only show when image is loaded */}
        {imageLoaded && offices.filter(o => o.show_on_contact).map((office) => {
          const pos = officePositions[office.country];
          if (!pos) return null;
          
          const isHovered = hoveredOffice === office.id;
          
          return (
            <div
              key={office.id}
              className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-full"
              style={{ 
                left: `${pos.x}%`, 
                top: `${pos.y}%`,
                zIndex: isHovered ? 20 : 10
              }}
              onClick={() => onSelectOffice(office)}
              onMouseEnter={() => setHoveredOffice(office.id)}
              onMouseLeave={() => setHoveredOffice(null)}
            >
              {/* Pin with Logo */}
              <div 
                className={`relative transition-transform duration-200 ${isHovered ? 'scale-110' : 'scale-100'}`}
              >
                {/* Pin drop shadow */}
                <div 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-0.5 w-2 h-0.5 bg-black/30 rounded-full blur-sm"
                />
                
                {/* Pin body */}
                <div className="relative">
                  {/* Pin shape - smaller size */}
                  <svg width="24" height="32" viewBox="0 0 24 32" className="drop-shadow-md">
                    {/* Pin body */}
                    <path 
                      d="M12 0C5.4 0 0 5.4 0 12C0 18.6 12 32 12 32C12 32 24 18.6 24 12C24 5.4 18.6 0 12 0Z" 
                      fill="#0D47A1"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    {/* White circle background for logo */}
                    <circle cx="12" cy="11" r="8" fill="white" />
                  </svg>
                  
                  {/* Logo inside pin */}
                  <div 
                    className="absolute"
                    style={{ 
                      top: '4px', 
                      left: '50%', 
                      transform: 'translateX(-50%)',
                      width: '12px',
                      height: '12px'
                    }}
                  >
                    <img 
                      src="/flowitec-logo.png" 
                      alt={office.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                
                {/* Country Label */}
                <div 
                  className={`absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-90'}`}
                  style={{ top: '-18px' }}
                >
                  <span className="bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm">
                    {pos.label}
                  </span>
                </div>
                
                {/* Hover tooltip */}
                {isHovered && (
                  <div 
                    className="absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                    style={{ bottom: '-20px' }}
                  >
                    <span className="bg-white text-primary text-[10px] font-medium px-2 py-1 rounded shadow-md border border-primary/20">
                      Click for details
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Legend */}
      <div className="mt-6 flex items-center justify-center gap-6 p-4 bg-gray-50 rounded-lg flex-wrap">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <img src="/flowitec-logo.png" alt="Flowitec" className="w-5 h-5 object-contain bg-white rounded-full p-0.5" />
          </div>
          <span className="text-sm font-medium text-gray-700">Flowitec Office Location</span>
        </div>
        <div className="text-sm text-gray-500">
          Click on a pin to view office details
        </div>
      </div>
      
      {/* Caption */}
      <p className="text-center text-sm text-gray-600 mt-4">
        Flowitec operates across <strong>Ghana</strong>, <strong>Nigeria</strong>, <strong>Kenya</strong> & <strong>South Africa</strong>
      </p>
    </div>
  );
};

export default AfricaMap2D;
        
        {/* Office Pin Markers - only show when image is loaded */}
        {imageLoaded && offices.filter(o => o.show_on_contact).map((office) => {
          const pos = officePositions[office.country];
          if (!pos) return null;
          
          const isHovered = hoveredOffice === office.id;
          
          return (
            <div
              key={office.id}
              className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-full"
              style={{ 
                left: `${pos.x}%`, 
                top: `${pos.y}%`,
                zIndex: isHovered ? 20 : 10
              }}
              onClick={() => onSelectOffice(office)}
              onMouseEnter={() => setHoveredOffice(office.id)}
              onMouseLeave={() => setHoveredOffice(null)}
            >
              {/* Pin with Logo */}
              <div 
                className={`relative transition-transform duration-200 ${isHovered ? 'scale-110' : 'scale-100'}`}
              >
                {/* Pin drop shadow */}
                <div 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-0.5 w-2 h-0.5 bg-black/30 rounded-full blur-sm"
                />
                
                {/* Pin body */}
                <div className="relative">
                  {/* Pin shape - smaller size */}
                  <svg width="24" height="32" viewBox="0 0 24 32" className="drop-shadow-md">
                    {/* Pin body */}
                    <path 
                      d="M12 0C5.4 0 0 5.4 0 12C0 18.6 12 32 12 32C12 32 24 18.6 24 12C24 5.4 18.6 0 12 0Z" 
                      fill="#0D47A1"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    {/* White circle background for logo */}
                    <circle cx="12" cy="11" r="8" fill="white" />
                  </svg>
                  
                  {/* Logo inside pin */}
                  <div 
                    className="absolute"
                    style={{ 
                      top: '4px', 
                      left: '50%', 
                      transform: 'translateX(-50%)',
                      width: '12px',
                      height: '12px'
                    }}
                  >
                    <img 
                      src="/flowitec-logo.png" 
                      alt={office.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                
                {/* Country Label */}
                <div 
                  className={`absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-90'}`}
                  style={{ top: '-18px' }}
                >
                  <span className="bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm">
                    {pos.label}
                  </span>
                </div>
                
                {/* Hover tooltip */}
                {isHovered && (
                  <div 
                    className="absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                    style={{ bottom: '-20px' }}
                  >
                    <span className="bg-white text-primary text-[10px] font-medium px-2 py-1 rounded shadow-md border border-primary/20">
                      Click for details
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Legend */}
      <div className="mt-6 flex items-center justify-center gap-6 p-4 bg-gray-50 rounded-lg flex-wrap">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <img src="/flowitec-logo.png" alt="Flowitec" className="w-5 h-5 object-contain bg-white rounded-full p-0.5" />
          </div>
          <span className="text-sm font-medium text-gray-700">Flowitec Office Location</span>
        </div>
        <div className="text-sm text-gray-500">
          Click on a pin to view office details
        </div>
      </div>
      
      {/* Caption */}
      <p className="text-center text-sm text-gray-600 mt-4">
        Flowitec operates across <strong>Ghana</strong>, <strong>Nigeria</strong> & <strong>Kenya</strong>
      </p>
    </div>
  );
};

export default AfricaMap2D;
