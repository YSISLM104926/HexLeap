// Card.tsx
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface CardProps {
    src: StaticImageData | string;
    title: string;
    totalEvents: number;
    sport: string;
    isDarkMode: boolean;
}

const Card: React.FC<CardProps> = ({ src, title, totalEvents, sport, isDarkMode }) => {
    return (
        <div className="FirstCardDiv mt-6">
            <div className={`${isDarkMode ? ' bg-[#3B3E47]' : 'bg-white'}`} style={{
                width: "237px", height: "511px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
            }}>
                <img className='p-2 mx-auto' src={typeof src === 'string' ? src : src.src} style={{ width: "100%", height: "410px", objectFit: 'cover' }} alt="Example Image" />
                <div className='px-2'>
                    <h1 className={`${isDarkMode ? 'text-white' : 'text-black'} font-medium`}
                     >{title}</h1>
                    <div className={`${isDarkMode ? ' bg-[#292B32]' : 'bg-white'} flex gap-4 p-2 rounded-sm mt-1`}>
                        <div>
                            <p className=
                            {`${isDarkMode ? 'text-white' : 'text-black'}`}
                            >Total Events</p>
                            <p className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>{totalEvents} Events</p>
                        </div>
                        <div>
                            <p className={`${isDarkMode ? 'text-white' : 'text-black'}`}>Sport</p>
                            <p className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold`}>{sport}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;