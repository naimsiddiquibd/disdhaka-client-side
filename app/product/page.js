import React from 'react';
import Image from 'next/image';
import s1 from '../assets/coke1.png';
import s2 from '../assets/coke2.png';
import blurImage from '../assets/bg.png';
import overlayImage from '../assets/bg2.png';

const Page = () => {
    return (
       <div className='relative min-h-screen flex items-center justify-center pt-10'>

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

         <div className="carousel w-1/2">
            <div id="slide1" className="carousel-item relative w-full justify-center">
                <Image
                    src={s1}
                    quality={100}
                    width={500}
                    height={500}
                    alt="Overlay Image"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full justify-center">
                <Image
                    src={s2}
                    quality={100}
                    width={500}
                    height={500}
                    alt="Overlay Image"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Page;
