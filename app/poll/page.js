"use client";
import React, { useState } from 'react';
import classNames from 'classnames';
import coffeepoll from '../assets/coffeepoll.png';
import pollparticipate from '../assets/pollparticipate.png';
import pollparticipatearrow from '../assets/pollparticipate2.png';
import football from '../assets/football.png';
import cricket from '../assets/cricket.png';
import movie1 from '../assets/movie1.png';
import movie2 from '../assets/movie2.png';
import movie3 from '../assets/movie3.png';
import drop from '../assets//drop2.png';
import wind from '../assets/wind.png';
import cloud from '../assets/cloud.png';
import weather from '../assets/weather.png';
import Image from 'next/image';

const page = () => {

    const [value, setValue] = useState(90);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const [activeItem, setActiveItem] = useState(0);

    const menuItems = [
        'All Industries',
        'MFS',
        'Movies',
        'Cricket',
        'Football',
    ];
    return (
        <div className='bg-[#F8F8F8] pt-5'>
            <div className="grid md:grid-cols-4 grid-cols-1 md:gap-4 gap-2 md:px-10 px-4">
                {/* Left side */}
                <div className="bg-white rounded-md hidden lg:inline h-[700px]">
                    <div className='flex items-center p-3'>
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className='ml-3'>
                            <p className='text-sm'>Welcome</p>
                            <h2 className='text-xl font-bold'>Nila Ahsan</h2>
                        </div>
                    </div>
                    <div className="flex mt-40">
                        <div className="divider w-full"></div>
                    </div>
                </div>

                {/* Middle Side */}
                <div className="bg-white md:col-span-2 collapse p-3 rounded-md overflow-y-auto scrollbar-hide max-h-screen">
                    <div className="flex z-40">
                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                className={classNames('cursor-pointer px-4 py-3 text-[11px] md:text-sm text-[#8d8d8d]', {
                                    ' border-b-2 border-[#FF0D0D]': activeItem === index,
                                    'text-gray-900': activeItem === index,
                                })}
                                onClick={() => setActiveItem(index)}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className="divider mt-0 h-0 z-30 mb-3"></div>
                    <div className='border-2 border-gray-200 rounded-md'>
                        <div className='grid grid-cols-2 w-full'>
                            <div className="p-2">
                                <Image
                                    src={coffeepoll}
                                    quality={100}
                                    width={310}

                                    alt="Overlay Image"
                                />
                            </div>
                            <div className="md:p-5 p-2">
                                <h2 className='md:text-2xl text-[17px] leading-snug font-semibold'>70% People think NorthEnd is the best Coffeshop in Dhaka.</h2>
                                <div className='md:mt-5 mt-0'>
                                    <div className="md:w-153 md:h-42 w-50 relative md:my-3 my-2">
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            step="1"
                                            value={value}
                                            onChange={handleChange}
                                            className="absolute w-full h-full opacity-0 z-10"
                                            style={{
                                                zIndex: 10,
                                                WebkitAppearance: 'none',
                                                MozAppearance: 'none',
                                                appearance: 'none',
                                            }}
                                        />
                                        <div className="bg-gray-300 w-full md:h-[55px] h-[20px] rounded-full relative z-0"></div>
                                        <div
                                            className="from-[#FF6B00] to-[#FFC700] bg-gradient-to-r md:h-[55px] 
                                            h-[20px] rounded-full absolute left-0 top-0 flex items-center pl-5 text-xs md:text-lg  font-bold text-white"
                                            style={{ width: `${value}%` }}
                                        >Northend</div>
                                    </div>
                                    <div className="md:w-153 md:h-42 w-50 relative md:my-3 my-2">
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            step="1"
                                            value={value}
                                            onChange={handleChange}
                                            className="absolute w-full h-full opacity-0 z-10"
                                            style={{
                                                zIndex: 10,
                                                WebkitAppearance: 'none',
                                                MozAppearance: 'none',
                                                appearance: 'none',
                                            }}
                                        />
                                        <div className="bg-gray-300 w-full md:h-[55px] h-[20px] rounded-full relative z-0"></div>
                                        <div
                                            className="bg-gradient-to-r from-[#39DD00] via-[#3ef003] to-[#00FFF0] md:h-[55px] 
                                            h-[20px] rounded-full absolute left-0 top-0 flex items-center pl-5 text-xs md:text-lg font-bold text-white"
                                            style={{ width: `${value}%` }}
                                        >Tabaq</div>
                                    </div>
                                    <div className="md:w-153 md:h-42 w-50 relative md:my-3 my-2">
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            step="1"
                                            value={value}
                                            onChange={handleChange}
                                            className="absolute w-full h-full opacity-0 z-10"
                                            style={{
                                                zIndex: 10,
                                                WebkitAppearance: 'none',
                                                MozAppearance: 'none',
                                                appearance: 'none',
                                            }}
                                        />
                                        <div className="bg-gray-300 w-full md:h-[55px] h-[20px] rounded-full relative z-0"></div>
                                        <div
                                            className="bg-gradient-to-r from-[#39DD00] via-[#3ef003] to-[#00FFF0] md:h-[55px] 
                                            h-[20px] rounded-full absolute left-0 top-0 flex items-center pl-5 text-xs md:text-lg font-bold text-white"
                                            style={{ width: `${value}%` }}
                                        >Crimson</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 from-purple-700  to-purple-300 bg-gradient-to-r h-20 rounded-b-md flex items-center px-6 justify-between">
                                <div className='flex items-center gap-4'>
                                    <Image
                                        src={pollparticipate}
                                        quality={100}
                                        width={38}
                                        height={38}
                                        alt="Overlay Image"
                                    />
                                    <h2 className='text-lg text-white font-semibold'>Participate in the Poll</h2>
                                </div>
                                <div>
                                    <Image
                                        src={pollparticipatearrow}
                                        quality={100}
                                        width={38}
                                        height={38}
                                        alt="Overlay Image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 my-3">
                        <div className="...">
                            <div className="card w-full glass rounded-md relative">
                                <figure>
                                    <Image
                                        src={football}
                                        quality={100}
                                        width={500}
                                        height={500}
                                        alt="Overlay Image"
                                    />
                                </figure>
                                <div className='absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent md:h-[210px] h-[120px]'></div>
                                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-end justify-left px-3 md:h-[200px] h-[120px] pb-2 md:pb-0">
                                    <p className="text-white text-[9px] md:text-[12.5px] font-bold">65% People think Messi is the best Football Player ever.</p>
                                </div>
                                <div className="flex items-center justify-between p-3">
                                    <p className='text-[9.20px]'>What do you think?</p>
                                    <div className="justify-end">
                                        <button className="bg-[#FF0D0D] text-white text-[9px] px-6 py-2 rounded-md">Participate in the Poll</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="...">
                        <div className="card w-full glass rounded-md relative">
                                <figure>
                                    <Image
                                        src={cricket}
                                        quality={100}
                                        width={500}
                                        height={500}
                                        alt="Overlay Image"
                                    />
                                </figure>
                                <div className='absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent md:h-[210px] h-[120px]'></div>
                                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-end justify-left px-3 md:h-[200px] h-[120px] pb-2 md:pb-0">
                                    <p className="text-white text-[9px] md:text-[12.5px] font-bold">Who Are you Supporting Today? 85% is Supporting Pakistan.</p>
                                </div>
                                <div className="flex items-center justify-between p-3">
                                    <p className='text-[9.20px]'>What do you think?</p>
                                    <div className="justify-end">
                                        <button className="bg-[#FF0D0D] text-white text-[9px] px-6 py-2 rounded-md">Participate in the Poll</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-7 md:mt-0 rounded-md border-[1.03px] border-solid border-[#d9d9d9] [background:radial-gradient(50%_50%_at_50%_50%,rgb(151,71,255)_0%,rgb(0,0,0)_100%)]'>
                        <div className='p-5'>
                            <div className='my-3'>
                                <p className="[font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-white text-[25.4px] tracking-[0] leading-[normal]">
                                    Movie of the Month?
                                </p>
                                <div className="[font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-white text-[16.5px] tracking-[0] leading-[normal] mt-1">
                                    90% People think Kingsman.
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="...">
                                    <div
                                        className="relative w-164 h-240 border rounded-md overflow-hidden"
                                    >
                                        <Image
                                            src={movie1}
                                            quality={100}
                                            width={500}
                                            height={240}
                                            alt="Overlay Image"
                                        />
                                        <div className="absolute top-0 right-0 p-2">
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                                <div className="...">
                                    <div
                                        className="relative w-164 h-240 border rounded-md overflow-hidden"
                                    >
                                        <Image
                                            src={movie2}
                                            quality={100}
                                            width={500}
                                            height={240}
                                            alt="Overlay Image"
                                        />

                                        <div className="absolute top-0 right-0 p-2">
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                                <div className="...">
                                    <div
                                        className="relative w-164 h-240 border rounded-md overflow-hidden"
                                    >
                                        <Image
                                            src={movie3}
                                            quality={100}
                                            width={500}
                                            height={240}
                                            alt="Overlay Image"
                                        />
                                        <div className="absolute top-0 right-0 p-2">
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end mt-4"> {/* Add this container div */}
                                <button className='bg-[#ff0c0c] px-5 py-2 rounded-md text-white'>
                                    Submit Your Opinion
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className='hidden lg:grid lg:grid-cols-1'>
                    <div className="bg-white h-[220px] w-full rounded-md grid grid-cols-1 gap-1 content-between">
                        <div className='flex flex-col items-center p-4 gap-1'>
                            <p className='text-[13px]'>Dhaka, Bangladesh</p>
                            <Image
                                    src={weather}
                                    quality={100}
                                    width={100}
                                    height={100}
                                    alt="Overlay Image"
                                />
                                <p className='text-[30px] font-bold'>32°C</p>
                        </div>

                        {/* Bottombar */}
                        <div className="col-span-2 bg-[#EEEEEE] h-20 rounded-b-md flex items-center px-6 justify-around">
                            <div className='flex items-center flex-col gap-1'>
                                <Image
                                    src={drop}
                                    quality={100}
                                    width={16}
                                    height={16}
                                    alt="Overlay Image"
                                />
                                <div>
                                    <p className='text-[#A6A6A6] text-[8.35px]'>Humidity</p>
                                </div>
                                <div>
                                    <p className='text-[13px] text-[#A6A6A6]'>32%</p>
                                </div>
                            </div>
                            <div className='flex items-center flex-col gap-1'>
                                <Image
                                    src={wind}
                                    quality={100}
                                    width={16}
                                    height={16}
                                    alt="Overlay Image"
                                />
                                <div>
                                    <p className='text-[#A6A6A6] text-[8.35px]'>Wind</p>
                                </div>
                                <div>
                                    <p className='text-[13px] text-[#A6A6A6]'>32%</p>
                                </div>
                            </div>
                            <div className='flex items-center flex-col gap-1'>
                                <Image
                                    src={cloud}
                                    quality={100}
                                    width={16}
                                    height={16}
                                    alt="Overlay Image"
                                />
                                <div>
                                    <p className='text-[#A6A6A6] text-[8.35px]'>Clould</p>
                                </div>
                                <div>
                                    <p className='text-[13px] text-[#A6A6A6]'>32%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white h-[400px] w-full rounded-md grid grid-cols-1">
                        <div className='flex flex-col items-start p-3'>
                            <p className='text-[17.7px] font-bold'>Trending Polls</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;