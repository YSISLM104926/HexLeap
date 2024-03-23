// Card.tsx
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface CardProps {
    src: StaticImageData | string;
    title: string;
    secondTitle: string;
    description: string;
    buttonName: string;
    isDarkMode: boolean;
}

const Card: React.FC<CardProps> = ({ src, title, secondTitle, description, buttonName, isDarkMode }) => {
    return (
        <div className="FirstCardDiv mt-6 p-4"
         style={{}}
        >
            <div className={`${isDarkMode ? 'bg-[#292B32] text-white p-2 overflow-hidden' : 'bg-white text-black overflow-hidden p-2'}`} style={{
                width: "257px", height: "625px",
                boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.2)",
                
            }}>
                <img className='mx-auto'
                
                src={typeof src === 'string' ? src : src.src} style={{ 
                    width: "100%", height: "401px", objectFit: 'cover', 
                    boxShadow: "0 0 10px rgba(0, 0, 0, 2)"
                    }} alt="Example Image" />
                <div className="flex justify-evenly mt-3 items-center relative">
                    <div className={`${isDarkMode ? 'bg-gradient-to-br from-[#18282A] to-[#221A2C]' : 'bg-gradient-to-br from-[#F9F8FF] to-[#F3F9FF]'} absolute right-[235px]`} style={{
                        width: "26px", height: "26px", borderRadius: 100,
                        clipPath: "circle(50% at 50% 50%)"
                    }}>
                          
                    </div>
                    <div>
                     <p className="text-[#A9ACB2]">- - - - - - - - - - - - - - - - - - - - -</p>
                    </div>
                    <div className={`${isDarkMode ? 'bg-gradient-to-br from-[#18282A] to-[#221A2C]' : 'bg-gradient-to-br from-[#F9F8FF] to-[#F3F9FF]'} absolute left-[236px]`}
                    style={{
                        width: "26px", height: "26px", borderRadius: 100,
                        clipPath: "circle(50% at 50% 50%)"

                    }}
                    >

                    </div>
                </div>
                <div className='px-2 mt-2'>
                    <h2 className='text-xl text-center font-medium'>{title}</h2>
                    <p className='text-center'>{secondTitle}</p>
                    <p className='text-center'>{description}</p>
                    <button className='px-9 py-2 bg-black text-white mt-4'>
                         {buttonName}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;