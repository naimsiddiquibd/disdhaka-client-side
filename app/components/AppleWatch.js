"use client";
import React, { useEffect, useRef } from 'react';
import './brands.css'; // Import your CSS file for styling

const AppleWatch = () => {
  const circleRefs = useRef([]);

  const columnData = [
    // Column 1
    [
        { imageSrc: 'rayans.png', cssClasses: 'w-[13.42px] h-[13.42px] bg-gray-900 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
        { imageSrc: 'honda.png', cssClasses: 'w-[13.42px] h-[13.42px] bg-gray-900 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
    ],
    // Column 2
    [
        { imageSrc: 'arang.png', cssClasses: 'w-[13.42px] h-[13.42px] bg-gray-900 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
        { imageSrc: 'startech.png', cssClasses: 'w-[27.72px] h-[27.72px] bg-gray-900 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
        { imageSrc: 'sprite.png', cssClasses: 'w-[33.44px] h-[33.44px] bg-gray-900 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
        { imageSrc: 'circle.png', cssClasses: 'w-[27.72px] h-[27.72px] bg-gray-900 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
        { imageSrc: 'westin.png', cssClasses: 'w-[13.42px] h-[13.42px] bg-gray-100 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
    ],
    // Column 3
    [
        { imageSrc: 'northend.png', cssClasses: 'w-[25.08px] h-[25.08px] bg-gray-900 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
        { imageSrc: 'bmw.png', cssClasses: 'w-[36.74px] h-[36.74px] bg-gray-900 mt-2 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
        { imageSrc: 'foodpanda.png', cssClasses: 'w-[36.74px] h-[36.74px] bg-gray-900 mt-2 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
        { imageSrc: 'pepsi.png', cssClasses: 'w-[25.08px] h-[25.08px] bg-gray-900 mt-2 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
    ],
    // Column 4
    [
        { imageSrc: 'pathao.png', cssClasses: 'w-[13.42px] h-[13.42px] bg-gray-900 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
        { imageSrc: 'bkash.png', cssClasses: 'w-[29.6px] h-[29.6px] bg-gray-900 mt-2 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
        { imageSrc: 'coca-cola.png', cssClasses: 'w-[39.6px] h-[39.6px] bg-gray-900 mt-2 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
        { imageSrc: 'ubar.png', cssClasses: 'w-[29.6px] h-[29.6px] bg-gray-900 mt-2 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
        { imageSrc: 'honda.png', cssClasses: 'w-[13.42px] h-[13.42px] bg-gray-900 mt-2 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
    ],
    // Column 5
    [
        { imageSrc: 'daraz.png', cssClasses: 'w-[25.08px] h-[25.08px] bg-gray-900 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
        { imageSrc: 'rayans.png', cssClasses: 'w-[36.74px] h-[36.74px] bg-gray-900 mt-2 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
        { imageSrc: 'westin.png', cssClasses: 'w-[36.74px] h-[36.74px] bg-gray-100 mt-2 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
        { imageSrc: 'fanta.png', cssClasses: 'w-[25.08px] h-[25.08px] bg-gray-900 mt-2 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
    ],
    // Column 6
    [
        { imageSrc: 'bkash.png', cssClasses: 'w-[13.42px] h-[13.42px] bg-gray-900 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
        { imageSrc: 'frooto.png', cssClasses: 'w-[27.72px] h-[27.72px] bg-gray-900 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
        { imageSrc: 'mirinda.png', cssClasses: 'w-[33.44px] h-[33.44px] bg-gray-900 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
        { imageSrc: 'arang.png', cssClasses: 'w-[27.72px] h-[27.72px] bg-gray-900 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
        { imageSrc: 'bmw.png', cssClasses: 'w-[13.42px] h-[13.42px] bg-gray-900 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
    ],
    // Column 7
    [
        { imageSrc: 'coca-cola.png', cssClasses: 'w-[13.42px] h-[13.42px] bg-gray-900 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
        { imageSrc: 'foodpanda.png', cssClasses: 'w-[13.42px] h-[13.42px] bg-gray-900 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
    ],
];



  useEffect(() => {
    const intervalId = setInterval(() => {
      const circles = circleRefs.current;
      const randomIndex = Math.floor(Math.random() * circles.length);

      circles.forEach((circle, index) => {
        if (index === randomIndex) {
          circle.classList.add('zoom-animation');
          setTimeout(() => {
            circle.classList.remove('zoom-animation');
            circle.classList.add('zoom-out-animation');
            setTimeout(() => {
              circle.classList.remove('zoom-out-animation');
            }, 1000); // Adjust this timeout to match the duration of your CSS animation
          }, 1000);
        }
      });
    }, 2000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} className='apple-watch-container'>
      {/* Column 1 */}
      <div className='flex flex-col justify-start space-y-4'>
        {columnData[0].map((item, itemIndex) => (
          <div key={itemIndex} ref={(ref) => (circleRefs.current[itemIndex] = ref)} className={item.cssClasses}>
            <img src={item.imageSrc} alt={`Image ${itemIndex + 1}`} />
          </div>
        ))}
      </div>
      {/* Column 2 */}
      <div className='flex flex-col space-y-2 items-end'>
        {columnData[1].map((item, itemIndex) => (
          <div key={itemIndex} ref={(ref) => (circleRefs.current[columnData[0].length + itemIndex] = ref)} className={item.cssClasses}>
            <img src={item.imageSrc} alt={`Image ${columnData[0].length + itemIndex + 1}`} />
          </div>
        ))}
      </div>
      {/* Column 3 */}
      <div className='flex flex-col items-end'>
        {columnData[2].map((item, itemIndex) => (
          <div key={itemIndex} ref={(ref) => (circleRefs.current[columnData[0].length + columnData[1].length + itemIndex] = ref)} className={item.cssClasses}>
            <img src={item.imageSrc} alt={`Image ${columnData[0].length + columnData[1].length + itemIndex + 1}`} />
          </div>
        ))}
      </div>
      {/* Column 4 */}
      <div className='flex flex-col items-center justify-center'>
        {columnData[3].map((item, itemIndex) => (
          <div key={itemIndex} ref={(ref) => (circleRefs.current[columnData[0].length + columnData[1].length + columnData[2].length + itemIndex] = ref)} className={item.cssClasses}>
            <img src={item.imageSrc} alt={`Image ${columnData[0].length + columnData[1].length + columnData[2].length + itemIndex + 1}`} />
          </div>
        ))}
      </div>
      {/* Column 5 */}
      <div className='flex flex-col items-left justify-left'>
        {columnData[4].map((item, itemIndex) => (
          <div key={itemIndex} ref={(ref) => (circleRefs.current[columnData[0].length + columnData[1].length + columnData[2].length + columnData[3].length + itemIndex] = ref)} className={item.cssClasses}>
            <img src={item.imageSrc} alt={`Image ${columnData[0].length + columnData[1].length + columnData[2].length + columnData[3].length + itemIndex + 1}`} />
          </div>
        ))}
      </div>
      {/* Column 6 */}
      <div className='flex flex-col justify-start space-y-2'>
        {columnData[5].map((item, itemIndex) => (
          <div key={itemIndex} ref={(ref) => (circleRefs.current[columnData[0].length + columnData[1].length + columnData[2].length + columnData[3].length + columnData[4].length + itemIndex] = ref)} className={item.cssClasses}>
            <img src={item.imageSrc} alt={`Image ${columnData[0].length + columnData[1].length + columnData[2].length + columnData[3].length + columnData[4].length + itemIndex + 1}`} />
          </div>
        ))}
      </div>
      {/* Column 7 */}
      <div className='flex flex-col justify-start space-y-4'>
        {columnData[6].map((item, itemIndex) => (
          <div key={itemIndex} ref={(ref) => (circleRefs.current[columnData[0].length + columnData[1].length + columnData[2].length + columnData[3].length + columnData[4].length + columnData[5].length + itemIndex] = ref)} className={item.cssClasses}>
            <img src={item.imageSrc} alt={`Image ${columnData[0].length + columnData[1].length + columnData[2].length + columnData[3].length + columnData[4].length + columnData[5].length + itemIndex + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default AppleWatch;
