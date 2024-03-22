// pages/index.tsx
import Image from 'next/image';
import React from 'react';
import 'tailwindcss/tailwind.css';
import SportsCard from '../components/SportsCard'
import SportsAdsCard from '../components/SportsAdsCard'
import CollectionSpotLiteCard from '../components/CollectionSpotLiteCard'
import CustomButton from '../components/Button'
import img1 from '../assets/a1.png'
import img2 from '../assets/b1.png'
import img3 from '../assets/c1.png'
import img33 from '../assets/b1.png'
import img4 from '../assets/d1.png'
import img5 from '../assets/x1.png'
import img6 from '../assets/x2.png'

const Home: React.FC = () => {
    return (
        <div className={`max-w-[1444px] mt-20 mx-auto`}>

            <h1 className="underline text-2xl font-bold">Sports</h1>
            
            {/* First Section of Cards - Sports  */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5'>
                <SportsCard
                    src={img1.src}
                    title="Sacramento River Cats"
                    totalEvents={48}
                    sport="Baseball"
                />
                <SportsCard
                    src={img2.src}
                    title="Sacramento River Cats"
                    totalEvents={48}
                    sport="Baseball"
                />
                <SportsCard
                    src={img3.src}
                    title="Sacramento River Cats"
                    totalEvents={48}
                    sport="Baseball"
                />
                <SportsCard
                    src={img33.src}
                    title="Sacramento River Cats"
                    totalEvents={48}
                    sport="Baseball"
                />
                <SportsAdsCard
                    src={img4.src}
                    title="Advertisement title"
                    description='Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, 
                    sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Lorem ipsum dolor 
                    sit amet, 
                    consectetur 
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna 
                    aliqua.'
                />
            </div>

            {/* See More Button */}
            <div className='flex justify-center mt-12
             '>
             <CustomButton name="See More" />
            </div>
            <br />

            {/* Second Section of Cards - Collection Spotlites  */}
            <div className='flex justify-center items-center flex-col mt-24'>
                <h1 className="text-5xl font-bold">Collection Spotlite</h1>
                <p className='mt-4 text-center'>Discover extraordinary moments with our Spotlight Collection metatickets exclusive access to premium events for an unforgettable experience. <br /> Grab yours today!</p>
            </div>


        </div>
    );
};

export default Home;
