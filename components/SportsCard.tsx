// Card.tsx
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface CardProps {
    src: StaticImageData | string;
    title: string;
    totalEvents: number;
    sport: string;
}

const Card: React.FC<CardProps> = ({ src, title, totalEvents, sport }) => {
    return (
        <div className="FirstCardDiv mt-6">
            <div className='overflow-hidden' style={{
                width: "237px", height: "511px", backgroundColor: "#FFFFFF",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
            }}>
                <img className='p-2 mx-auto' src={typeof src === 'string' ? src : src.src} style={{ width: "100%", height: "410px", objectFit: 'cover' }} alt="Example Image" />
                <div className='px-2'>
                    <h1 className='text-black font-medium'>{title}</h1>
                    <div className='flex gap-4 p-2 rounded-sm mt-1' style={{ backgroundColor: "#F7F7F8", }}>
                        <div>
                            <p className='' style={{ color: "#525965" }}>Total Events</p>
                            <p className='font-semibold text-black'>{totalEvents} Events</p>
                        </div>
                        <div>
                            <p className='text-white' style={{ color: "#525965" }}>Sport</p>
                            <p className='font-semibold text-black'>{sport}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;