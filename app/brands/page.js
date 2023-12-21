"use client";
import React, { useEffect, useRef } from 'react';
import './brands.css'; // Import your CSS file for styling

import Image from 'next/image';
import blurImage from '../assets/bg.png';
import overlayImage from '../assets/bg2.png';
import Link from 'next/link';

const AppleWatch = () => {
    const circleRefs = useRef([]);

    const columnData = [
        // Column 1
        [
          { id: '1_1', imageSrc: 'rayans.png', cssClasses: 'w-[26.84px] h-[26.84px] md:w-[61px] md:h-[61px] bg-transparent rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
          { id: '1_2', imageSrc: 'honda.png', cssClasses: 'w-[26.84px] h-[26.84px] md:w-[61px] md:h-[61px] bg-transparent rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
        ],
        // Column 2
        [
          { id: '2_1', imageSrc: 'arang.png', cssClasses: 'w-[26.84px] h-[26.84px] md:w-[61px] md:h-[61px] bg-transparent rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
          { id: '2_2', imageSrc: 'startech.png', cssClasses: 'w-[55.44px] h-[55.44px] md:w-[126px] md:h-[126px] bg-transparent rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
          { id: '2_3', imageSrc: 'sprite.png', cssClasses: 'w-[60.44px] h-[60.44px] md:w-[137px] md:h-[137px] bg-transparent rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
          { id: '2_4', imageSrc: 'circle.png', cssClasses: 'w-[55.44px] h-[55.44px] md:w-[126px] md:h-[126px] bg-transparent rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
          { id: '2_5', imageSrc: 'westin.png', cssClasses: 'w-[26.84px] h-[26.84px] md:w-[61px] md:h-[61px] bg-gray-100 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
        ],
        // Column 3
        [
          { id: '3_1', imageSrc: 'northend.png', cssClasses: 'w-[45.08px] h-[45.08px] md:w-[114px] md:h-[114px] bg-transparent rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
          { id: '3_2', imageSrc: 'bmw.png', cssClasses: 'w-[66.74px] h-[66.74px] md:w-[167px] md:h-[167px] bg-transparent mt-2 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
          { id: '3_3', imageSrc: 'foodpanda.png', cssClasses: 'w-[66.74px] h-[66.74px] md:w-[167px] md:h-[167px] bg-transparent mt-2 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
          { id: '3_4', imageSrc: 'pepsi.png', cssClasses: 'w-[45.08px] h-[45.08px] md:w-[114px] md:h-[114px] bg-transparent mt-2 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
        ],
        // Column 4
        [
          { id: '4_1', imageSrc: 'pathao.png', cssClasses: 'w-[26.84px] h-[26.84px] md:w-[61px] md:h-[61px] bg-transparent rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-[1]' },
          { id: '4_2', imageSrc: 'bkash.png', cssClasses: 'w-[59.2px] h-[59.2px] md:w-[160px] md:h-[160px] bg-transparent mt-2 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-[1]' },
          { id: '4_3', imageSrc: 'coca-cola.png', cssClasses: 'w-[79.2px] h-[79.2px] md:w-[200px] md:h-[200px] bg-transparent mt-2 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-[1]' },
          { id: '4_4', imageSrc: 'ubar.png', cssClasses: 'w-[59.2px] h-[59.2px] md:w-[160px] md:h-[160px] bg-transparent mt-2 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-[1]' },
          { id: '4_5', imageSrc: 'honda.png', cssClasses: 'w-[26.84px] h-[26.84px] w-[26.84px] h-[26.84px] md:w-[61px] md:h-[61px] bg-transparent mt-2 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-[1]' },
        ],
        // Column 5
        [
          { id: '5_1', imageSrc: 'daraz.png', cssClasses: 'w-[45.08px] h-[45.08px] md:w-[114px] md:h-[114px] bg-transparent rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
          { id: '5_2', imageSrc: 'rayans.png', cssClasses: 'w-[66.74px] h-[66.74px] md:w-[167px] md:h-[167px] bg-transparent mt-2 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
          { id: '5_3', imageSrc: 'westin.png', cssClasses: 'w-[66.74px] h-[66.74px] md:w-[167px] md:h-[167px] bg-gray-100 mt-2 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
          { id: '5_4', imageSrc: 'fanta.png', cssClasses: 'w-[45.08px] h-[45.08px] md:w-[114px] md:h-[114px] bg-transparent mt-2 rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
        ],
        // Column 6
        [
          { id: '6_1', imageSrc: 'bkash.png', cssClasses: 'w-[26.84px] h-[26.84px] md:w-[61px] md:h-[61px] bg-transparent rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
          { id: '6_2', imageSrc: 'frooto.png', cssClasses: 'w-[55.44px] h-[55.44px md:w-[126px] md:h-[126px] bg-transparent rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
          { id: '6_3', imageSrc: 'mirinda.png', cssClasses: 'w-[66.88px] h-[66.88px] md:w-[152px] md:h-[152px] bg-transparent rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
          { id: '6_4', imageSrc: 'arang.png', cssClasses: 'w-[55.44px] h-[55.44px] md:w-[126px] md:h-[126px] bg-transparent rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
          { id: '6_5', imageSrc: 'bmw.png', cssClasses: 'w-[26.84px] h-[26.84px] md:w-[61px] md:h-[61px] bg-transparent rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
        ],
        // Column 7
        [
          { id: '7_1', imageSrc: 'coca-cola.png', cssClasses: 'w-[26.84px] h-[26.84px] md:w-[61px] md:h-[61px] bg-transparent rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
          { id: '7_2', imageSrc: 'foodpanda.png', cssClasses: 'w-[26.84px] h-[26.84px] md:w-[61px] md:h-[61px] bg-transparent rounded-full flex items-center justify-center text-white transition-transform hover:translate-y-10 transform-gpu hover:scale-[3] hover:z-10' },
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
        <div className="relative min-h-screen flex items-center justify-center pt-10">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={blurImage}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    alt="Background Image"
                />
            </div>

            {/* Overlay Image */}
            <div className="absolute inset-0">
                <Image
                    src={overlayImage}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    alt="Overlay Image"
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} className='apple-watch-container'>
                {/* Column 1 */}
                <div className='flex flex-col justify-start space-y-16 md:space-y-36'>
                {columnData[0].map((item, itemIndex) => (
                        <div key={itemIndex} ref={(ref) => (circleRefs.current[columnData[0].length + itemIndex] = ref)} className={item.cssClasses}>
                            <img src={item.imageSrc} alt={`Image ${columnData[0].length + itemIndex + 1}`} />
                        </div>
                    ))}
                </div>

                {/* Column 2 */}
                <div className='flex flex-col space-y-8 items-end'>
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
                        <Link href='/product' className='hover:z-[1]'>
                            <div key={itemIndex} ref={(ref) => (circleRefs.current[columnData[0].length + columnData[1].length + columnData[2].length + itemIndex] = ref)} className={item.cssClasses}>
                            <img src={item.imageSrc} alt={`Image ${columnData[0].length + columnData[1].length + columnData[2].length + itemIndex + 1}`} />
                        </div>
                        </Link>
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
                <div className='flex flex-col justify-start space-y-8'>
                    {columnData[5].map((item, itemIndex) => (
                        <div key={itemIndex} ref={(ref) => (circleRefs.current[columnData[0].length + columnData[1].length + columnData[2].length + columnData[3].length + columnData[4].length + itemIndex] = ref)} className={item.cssClasses}>
                            <img src={item.imageSrc} alt={`Image ${columnData[0].length + columnData[1].length + columnData[2].length + columnData[3].length + columnData[4].length + itemIndex + 1}`} />
                        </div>
                    ))}
                </div>
                {/* Column 7 */}
                <div className='flex flex-col justify-start space-y-16 md:space-y-36'>
                    {columnData[6].map((item, itemIndex) => (
                        <div key={itemIndex} ref={(ref) => (circleRefs.current[columnData[0].length + columnData[1].length + columnData[2].length + columnData[3].length + columnData[4].length + columnData[5].length + itemIndex] = ref)} className={item.cssClasses}>
                            <img src={item.imageSrc} alt={`Image ${columnData[0].length + columnData[1].length + columnData[2].length + columnData[3].length + columnData[4].length + columnData[5].length + itemIndex + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );

};

export default AppleWatch;
