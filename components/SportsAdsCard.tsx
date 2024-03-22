// Card.tsx
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface CardProps {
    src: StaticImageData | string;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ src, title, description }) => {
    return (
        <div className="FirstCardDiv mt-6">
            <div className='overflow-hidden' style={{
                width: "237px", height: "511px", backgroundColor: "#FFFFFF",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
            }}>
                <div className='overflow-hidden'>
                    <div className='relative'>
                        <h1 className='absolute top-2 left-44 bg-[#000000] text-white px-4'>Ad</h1>
                        <img className='p-2 mx-auto' src={typeof src === 'string' ? src : src.src} style={{
                            width: "100%", height: "218px",
                            objectFit: 'cover',
                        }} alt="Example Image" />
                    </div>
                    <div className='px-2'>
                        <h1 className='text-black font-medium text-center text-2xl'>{title}</h1>
                        <div className='flex gap-4 p-2 rounded-sm mt-1'>
                            <p className='text-start'>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;