import React, { useState } from 'react';
import SportsCard from '../components/SportsCard';
import SportsAdsCard from '../components/SportsAdsCard';
import CollectionSpotLiteCard from '../components/CollectionSpotLiteCard';
import CustomButton from '../components/Button';
import img1 from '../assets/a1.png';
import img2 from '../assets/b1.png';
import img3 from '../assets/c1.png';
import img4 from '../assets/d1.png';
import img5 from '../assets/x1.png';
import img6 from '../assets/x2.png';
import 'tailwindcss/tailwind.css'; // Move this import to the top if it's not already there
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import AliceCarousel from 'react-alice-carousel';


const collectionSpotCard = [
    {
        src: img5,
        title: "Las Vegas Aviators",
        secondTitle: "OCT 15 | SUN | 4:30 PM",
        description: "Las Vegas Ballpark, Las Vegas, Nevada",
        buttonName: "Take Flight Collection",
        key: "card1"
    },
    {
        src: img6,
        title: "Sacramento River Cats",
        secondTitle: "OCT 15 | SUN | 4:30 PM",
        description: "Sutter Health Park, Sacramento, California",
        buttonName: "Orange Collection",
        key: "card2"
    },
    {
        src: img5,
        title: "Las Vegas Aviators",
        secondTitle: "OCT 15 | SUN | 4:30 PM",
        description: "Las Vegas Ballpark, Las Vegas, Nevada",
        buttonName: "Take Flight Collection",
        key: "card1"
    },
    {
        src: img6,
        title: "Sacramento River Cats",
        secondTitle: "OCT 15 | SUN | 4:30 PM",
        description: "Sutter Health Park, Sacramento, California",
        buttonName: "Orange Collection",
        key: "card2"
    },

]


const Home: React.FC = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    return (


        <>
            <div className={`${isDarkMode ? 'bg-[#292B32] text-white' : 'bg-white text-black'} pt-12 w-full`}>
                <div className='flex justify-end me-20'>
                    <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center'>
                        <input
                            type='checkbox'
                            checked={isDarkMode}
                            onChange={toggleMode}
                            className='sr-only'
                        />
                        <span className={`${isDarkMode ? 'text-white' : 'text-black'} label flex items-center text-sm font-medium`}>
                            Light
                        </span>
                        <span
                            className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${isDarkMode ? 'bg-gray-900' : 'bg-[#CCCCCE]'
                                }`}
                        >
                            <span
                                className={`dot h-6 w-6 rounded-full bg-white duration-200 ${isDarkMode ? 'translate-x-[28px]' : ''
                                    }`}
                            ></span>
                        </span>
                        <span className={`${isDarkMode ? 'text-white' : 'text-black'} label flex items-center text-sm font-medium`}>
                            Dark
                        </span>
                    </label>
                </div>
                <div className={`max-w-[1444px] mx-auto mt-12`}>
                    <button className="text-2xl font-bold">
                        <h1 className='ms-12 text-4xl mb-3 lg:text-4xl mb-3'>Sports</h1>
                        <hr className='ms-12 border border-purple-400  lg:border border-purple-400' />
                    </button>

                    {/* First Section of Cards - Sports  */}
                    <div className='grid ms-[130px] grid-cols-1 md:ms-[40px] md:grid-cols-3 lg:grid-cols-5'>
                        <SportsCard
                            src={img1}
                            title="Sacramento River Cats"
                            totalEvents={48}
                            sport="Baseball"
                            isDarkMode={isDarkMode}
                        />
                        <SportsCard
                            src={img2}
                            title="Sacramento River Cats"
                            totalEvents={48}
                            sport="Baseball"
                            isDarkMode={isDarkMode}
                        />
                        <SportsCard
                            src={img3}
                            title="Sacramento River Cats"
                            totalEvents={48}
                            sport="Baseball"
                            isDarkMode={isDarkMode}
                        />
                        <SportsCard
                            src={img2}
                            title="Sacramento River Cats"
                            totalEvents={48}
                            sport="Baseball"
                            isDarkMode={isDarkMode}
                        />
                        <SportsAdsCard
                            src={img4}
                            title="Advertisement title"
                            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            isDarkMode={isDarkMode}
                        />
                    </div>

                    {/* See More Button */}
                    <div className='flex justify-center mt-12 mb-12'>
                        <CustomButton name="See More" />
                    </div>
                    <br />

                    {/* Second Section of Cards - Collection Spotlites  */}
                    <div className={`${isDarkMode ? ' bg-gradient-to-br from-[#18282A] to-[#221A2C]' : 'bg-white text-black'}`} style={{ backgroundColor: "#F9F8FF", padding: "60px" }}>
                        <div className='flex justify-center items-center flex-col'>
                            <h1 className="text-5xl font-bold">Collection Spotlite</h1>
                            <p className='mt-4 text-center'>Discover extraordinary moments with our Spotlight Collection metatickets exclusive access to premium events for an unforgettable experience. <br /> Grab yours today!</p>
                        </div>

                        <div className='w-3/4 mx-auto'> {/* Set display to flex */}

                            <AliceCarousel
                                mouseTracking
                                responsive={responsive}
                                controlsStrategy="alternate"
                                renderPrevButton={() => {
                                    return <p className="p-4 absolute left-[-70px] top-[320px] border border-sky-300 hover:cursor-pointer  "><GrPrevious className='text-blue-300 size-4 ' /></p>
                                }}
                                renderNextButton={() => {
                                    return <p className="p-4 absolute right-[-70px] top-[320px] border border-sky-300 hover:cursor-pointer"><GrNext className='text-blue-300 size-4 z-10' /></p>
                                }}
                            >
                                {collectionSpotCard.map((item, index) => (
                                    <CollectionSpotLiteCard
                                        key={index}
                                        src={item.src}
                                        title={item.title}
                                        secondTitle={item.secondTitle}
                                        description={item.description}
                                        buttonName={item.buttonName}
                                        isDarkMode={isDarkMode}
                                    />
                                ))}
                            </AliceCarousel>
                        </div>

                    </div>
                    <div className={`${isDarkMode ? 'bg-[#292B32]' : 'bg-white'} pb-20`}>
                    {/* Footer */}
                    </div>
                </div>
            </div>
        </>

    );
};

export default Home;
