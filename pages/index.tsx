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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "../assets/left-arrow.svg"
import RightArrow from "../assets/right-arrow.svg"
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";



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

    function SampleNextArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <>
                <div onClick={onClick} className={className}
                    
                >
                    <GrNext
                    style={{ ...style, color: "red", fontSize: "30px" }}
                     className='size-9 z-10 border border-blue-300 text-blue-300 transition-all 
                     duration-300 hover:text-white hover:bg-blue-400' />
                </div>
            </>
        );
    }

    function SamplePrevArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <>
                <div onClick={onClick} className={className}
                    
                >
                    <GrPrevious
                    style={{ ...style, color: "red", fontSize: "30px" }}
                     className='size-9 z-10 border border-blue-300 text-blue-300 transition-all duration-300 hover:text-white hover:bg-blue-400' />
                </div>
            </>
        );
    }


    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (


        <>
            <div className={`${isDarkMode ? 'bg-[#292B32] text-white' : 'bg-white text-black'} pt-12`}>
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
                <div className={`max-w-[1444px] mx-auto`}>
                    <button className="text-2xl font-bold">
                        <h1 className='text-4xl mb-3'>Sports</h1>
                        <hr className='border border-purple-400' />
                    </button>

                    {/* First Section of Cards - Sports  */}
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
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
                            
                            <Slider {...settings} className=''>
                                {
                                    collectionSpotCard.map((item, index) => (

                                        <CollectionSpotLiteCard
                                            key={index}
                                            src={item.src}
                                            title={item.title}
                                            secondTitle={item.secondTitle}
                                            description={item.description}
                                            buttonName={item.buttonName}
                                            isDarkMode={isDarkMode}
                                        />
                                    ))

                                }
                            </Slider>
                           
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
};

export default Home;
