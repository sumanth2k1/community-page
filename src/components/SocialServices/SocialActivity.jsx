import React from 'react';
import socialcover from '../../assets/socialcover.jpg';

export default function SocialActivity() {
    return (
        <div>
            <div className='flex z-0 flex-col items-center w-full justify-center relative'>
                <img src={socialcover} alt="Social Cover" className='w-full' />
                <div className="absolute bottom-0 left-0 w-full h-24 md:h-64 lg:h-64 p-6 flex flex-col items-center justify-center bg-opacity-75" style={{ backgroundColor: '#FFD1B9BD' }}>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-red-800 mb-2">
                        Social Activities
                    </h1>
                    <h2 className="text-sm md:text-base lg:text-lg xl:text-xl text-red-800">
                        by the Shree Shaneshwara Chamundeshwari Ayyappa Bhakta Vrinda Public Trust
                    </h2>
                </div>
            </div>

            <div className='h-full w-full'>

            </div>
        </div>
    );
}
