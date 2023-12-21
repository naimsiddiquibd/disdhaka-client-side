// YourComponent.jsx
import React from 'react';
import coffee from '../assets/coffee.png';
import players from '../assets/players.png';
import Image from 'next/image';
import blurImage from '../assets/bg.png';
import overlayImage from '../assets/bg2.png';
import Navbar from '../components/Navbar/Navbar';


const Poll = () => {
    return (
        <div className='relative'>
            {/* Background Image */}
            <div className="fixed inset-0 z-0">
                <Image
                    src={blurImage}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    alt="Background Image"
                />
            </div>

            {/* Overlay Image */}
            <div className="fixed inset-0 z-1">
                <Image
                    src={overlayImage}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    alt="Overlay Image"
                />
            </div>
            <Navbar></Navbar>
            <div className='flex justify-center z-2 relative'>
                <div>
                    <div className="card lg:card-side bg-base-100 shadow-xl max-w-[1204px] mt-8">
                        <figure className='p-4'>
                            <Image className='w-[505px] h-[354px]' src={coffee} alt="Album" />
                        </figure>
                        <div className="card-body pl-4 gap-7">
                            <h2 className="card-title text-4xl max-w-[558px]">Best Cafe to chill with your friends  in Dhaka?</h2>
                            <div className="form-control">
                                <label className="label cursor-pointer gap-4">
                                    <input type="checkbox" className="checkbox bg-gray-400" />
                                    <p className="label-text text-[20px]">Pinewood Cafe</p>
                                </label>
                                <label className="label cursor-pointer gap-4">
                                    <input type="checkbox" className="checkbox bg-gray-400" />
                                    <p className="label-text text-[20px]">CrimsonCup</p>
                                </label>
                                <label className="label cursor-pointer gap-4">
                                    <input type="checkbox" className="checkbox bg-gray-400" />
                                    <p className="label-text text-[20px]">NorthEnd</p>
                                </label>
                            </div>
                            <div className="card-actions justify-start gap-4">
                                <button className="btn bg-gray-300 px-10">Pass</button>
                                <button className="btn bg-[#FF0D0D] text-white px-10">Place Your Vote</button>
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side bg-base-100 shadow-xl max-w-[1204px] my-5 ">
                        <figure className='p-4'>
                            <Image className='w-[505px] h-[354px]' src={players} alt="Album" />
                        </figure>
                        <div className="card-body pl-4 gap-7">
                            <h2 className="card-title text-4xl max-w-[558px]">Best Cafe to chill with your friends  in Dhaka?</h2>
                            <div className="form-control">
                                <label className="label cursor-pointer gap-4">
                                    <input type="checkbox" className="checkbox bg-gray-400" />
                                    <p className="label-text text-[20px]">Pinewood Cafe</p>
                                </label>
                                <label className="label cursor-pointer gap-4">
                                    <input type="checkbox" className="checkbox bg-gray-400" />
                                    <p className="label-text text-[20px]">CrimsonCup</p>
                                </label>
                                <label className="label cursor-pointer gap-4">
                                    <input type="checkbox" className="checkbox bg-gray-400" />
                                    <p className="label-text text-[20px]">NorthEnd</p>
                                </label>
                            </div>
                            <div className="card-actions justify-start gap-4">
                                <button className="btn bg-gray-300 px-10">Pass</button>
                                <button className="btn bg-[#FF0D0D] text-white px-10">Place Your Vote</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Poll;
