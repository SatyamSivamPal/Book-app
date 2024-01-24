import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FaStar } from "react-icons/fa6"

//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Avatar } from 'flowbite-react';
import profile from "../assets/profileImage.jpg"
import profile2 from "../assets/profile2.jpg"
import profile3 from "../assets/profile3.jpg"
import profile4 from "../assets/profile4.jpg"

const Review = () => {
    return (
        <div className='my-12 px-4 lg:px-24'>
            <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='shadow-2xl bg-white px-4 py-8 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className='mt-7'>
                                <p className='mb-5'>
                                    This app caters to all types of readers. From audiobooks to e-books, it's a one-stop-shop. The syncing across devices is seamless, and the reading stats are a fun addition. The only improvement I'd suggest is expanding the selection of graphic novels.
                                </p>
                                <Avatar img={profile} alt="avatar of Jese" rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium'>Hari Prasad</h5>
                                <p className='text-base'>CEO, IndiaTimes Company</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white px-4 py-8 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className='mt-7'>
                                <p className='mb-5'>
                                As a busy professional, audiobooks are my go-to, and this app has an impressive selection. The offline mode is a game-changer during my commute. The only drawback is the occasional glitch in playback. Fix that, and it's a perfect audiobook hub.
                                </p>
                                <Avatar img={profile2} alt="avatar of Jese" rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium'>Neha Sharma</h5>
                                <p className='text-base'>Secretary, College Books</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white px-4 py-8 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                    
                            </div>
                            <div className='mt-7'>
                                <p className='mb-5'>
                                The app provides a decent reading experience, but there's room for improvement. I'd love to see more customization options for the interface, and the social features could be more interactive. A good foundation, but it needs a bit more polish.
                                </p>
                                <Avatar img={profile3} alt="avatar of Jese" rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium'>Ishika Agarwal</h5>
                                <p className='text-base'>Chief Journalist, OTV</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white px-4 py-8 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className='mt-7'>
                                <p className='mb-5'>
                                This app is a dream for book lovers! The vast library, seamless navigation, and intuitive recommendations make it a joy to explore. I appreciate the reading challenges that keep me motivated. My new favorite companion for literary adventures!
                                </p>
                                <Avatar img={profile4} alt="avatar of Jese" rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium'>Rakesh Sharma</h5>
                                <p className='text-base'>Software Enginner, Goggle</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Review