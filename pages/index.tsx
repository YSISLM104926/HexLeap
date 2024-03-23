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


import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

const Home: React.FC = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (

        <div className={`${isDarkMode ? 'bg-[#292B32] text-white' : 'bg-white text-black'}`}>
            <div className={`max-w-[1444px] mx-auto`}>
                <button onClick={toggleMode} className="underline text-2xl font-bold">Sports</button>

                {/* First Section of Cards - Sports  */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5'>
                    <SportsCard
                        src={img1}
                        title="Sacramento River Cats"
                        totalEvents={48}
                        sport="Baseball"
                    />
                    <SportsCard
                        src={img2}
                        title="Sacramento River Cats"
                        totalEvents={48}
                        sport="Baseball"
                    />
                    <SportsCard
                        src={img3}
                        title="Sacramento River Cats"
                        totalEvents={48}
                        sport="Baseball"
                    />
                    <SportsCard
                        src={img2}
                        title="Sacramento River Cats"
                        totalEvents={48}
                        sport="Baseball"
                    />
                    <SportsAdsCard
                        src={img4}
                        title="Advertisement title"
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    />
                </div>

                {/* See More Button */}
                <div className='flex justify-center mt-12'>
                    <CustomButton name="See More" />
                </div>
                <br />

                {/* Second Section of Cards - Collection Spotlites  */}
                <div className={`${isDarkMode ? ' bg-gradient-to-br from-gray-900 to-gray-800 text-white' : 'bg-white text-black'}`} style={{ backgroundColor: "#F9F8FF", padding: "60px" }}>
                    <div className='flex justify-center items-center flex-col'>
                        <h1 className="text-5xl font-bold">Collection Spotlite</h1>
                        <p className='mt-4 text-center'>Discover extraordinary moments with our Spotlight Collection metatickets exclusive access to premium events for an unforgettable experience. <br /> Grab yours today!</p>
                    </div>
                    <div className="">
                        <div className='flex justify-center'> {/* Set display to flex */}
                            <CollectionSpotLiteCard
                                src={img5}
                                title="Las Vegas Aviators"
                                secondTitle="OCT 15 | SUN | 4:30 PM"
                                description="Las Vegas Ballpark, Las Vegas, Nevada"
                                buttonName="Take Flight Collection"
                                isDarkMode={isDarkMode}
                            />
                            <CollectionSpotLiteCard
                                src={img6}
                                title="Las Vegas Aviators"
                                secondTitle="OCT 15 | SUN | 4:30 PM"
                                description="Las Vegas Ballpark, Las Vegas, Nevada"
                                buttonName="Take Flight Collection"
                                isDarkMode={isDarkMode}
                            />
                            <CollectionSpotLiteCard
                                src={img5}
                                title="Las Vegas Aviators"
                                secondTitle="OCT 15 | SUN | 4:30 PM"
                                description="Las Vegas Ballpark, Las Vegas, Nevada"
                                buttonName="Take Flight Collection"
                                isDarkMode={isDarkMode}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
