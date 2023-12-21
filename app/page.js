import React from 'react';
import Image from 'next/image';
import blurImage from '../app/assets/bg.png';
import overlayImage from '../app/assets/bg2.png';
import poll from '../app/assets/polling.png';
import question from '../app/assets/question.png';
import Link from 'next/link';
import AppleWatch from './components/AppleWatch';
import { Cog8ToothIcon } from '@heroicons/react/24/outline'

const Home = () => {
  return (
    <div className="relative z-30">
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

      <div className='relative min-h-screen flex items-center justify-center'>
        {/* Cog8ToothIcon at the bottom left corner */}
        <div className="absolute bottom-4 left-4">
          <div className='flex items-center gap-3'>
            <div className="bg-red-500 p-3 rounded-full">
              <Cog8ToothIcon className="text-white h-6 w-6" />
            </div>
            <div className="text-sm font-montserrat text-white">
              <p>
                <span>Powered By <span className='font-bold'>Fatmonk Studio</span></span><br />
                <span><span className='font-bold'>Copyright</span> © 2023 DisDhaka. All rights reserved.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mb-20 md:mb-0 mt-14">

          <Link href="/brands">
            <div
              className="m-4 p-6 bg-black bg-opacity-[35%] w-80 h-56 rounded-[30px] sm:w-314 sm:h-224 flex flex-col justify-center items-center relative"
            >
              <AppleWatch></AppleWatch>
              {/* Add additional content or text for each card if needed */}
              <div className="absolute inset-0 flex items-center justify-center">
              </div>
            </div>
          </Link>
          <Link href='/poll'>
            <div
              className="m-4 p-6 bg-black bg-opacity-[35%] w-80 h-56 rounded-[30px] sm:w-314 sm:h-224 flex flex-col justify-center items-center relative"
            >
              <div className="w-153 h-153">
                <Image
                  src={poll}
                  width={153}
                  height={153}
                  objectFit="cover"
                  quality={100}
                  alt={poll}
                  className="rounded-xl"
                />
              </div>
              {/* Add additional content or text for each card if needed */}
              <div className="absolute inset-0 flex items-center justify-center">
              </div>
            </div></Link>
          <div
            className="m-4 p-6 bg-black bg-opacity-[35%] w-80 h-56 rounded-[30px] sm:w-314 sm:h-224 flex flex-col justify-center items-center relative"
          >
            <div className="w-153 h-153">
              <Image
                src={question}
                layout="fill"
                objectFit="cover"
                quality={100}
                alt={question}
                className="rounded-xl"
              />
            </div>
            {/* Add additional content or text for each card if needed */}
            <div className="absolute inset-0 flex items-center justify-center">
            </div>
          </div>
          <div
            className="m-4 p-6 bg-white bg-opacity-[35%] w-80 h-56 rounded-[30px] sm:w-314 sm:h-224 flex flex-col justify-center items-center relative"
          >

            {/* Add additional content or text for each card if needed */}
            <div className="absolute inset-0 flex items-center justify-center">
            </div>
          </div>
          <div
            className="m-4 p-6 bg-white bg-opacity-[35%] w-80 h-56 rounded-[30px] sm:w-314 sm:h-224 flex flex-col justify-center items-center relative"
          >

            {/* Add additional content or text for each card if needed */}
            <div className="absolute inset-0 flex items-center justify-center">
            </div>
          </div>
          <div
            className="m-4 p-6 bg-white bg-opacity-[35%] w-80 h-56 rounded-[30px] sm:w-314 sm:h-224 flex flex-col justify-center items-center relative"
          >

            {/* Add additional content or text for each card if needed */}
            <div className="absolute inset-0 flex items-center justify-center">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
