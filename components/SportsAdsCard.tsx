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
        <div className="FirstCardDiv mt-6 ">
            <div className='overflow-hidden' style={{
                width: "237px", height: "511px", backgroundColor: "#FFFFFF",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
            }}>
                <div className=' overflow-hidden'>
                    <div className='p-2'>

                        <div className='relative border border-[#006555]'
                            style={{
                                width: "220px", height: "493px",
                            }}
                        >
                            <h1 className='absolute top-0 left-[167px] bg-[#000000] text-white px-4'>Ad</h1>
                            <img className='mx-auto' src={typeof src === 'string' ? src : src.src} style={{
                                width: "100%", height: "218px",
                                objectFit: 'cover',
                            }} alt="Example Image" />
                            <div className='mx-3 rounded-sm mt-3'>
                                <h1 className='text-black font-medium text-start text-xl'>{title}</h1>
                                <p className='text-start text-sm'>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;