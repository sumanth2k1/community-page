import React from 'react'

export default function HomeFooter() {
    return (
        <footer className="text-white py-8 static w-full bottom-0" style={{ background: 'linear-gradient(180deg, #FFBE99 0%, rgba(255, 190, 153, 0.77) 100%)' }}>
            <div className="container mx-auto flex flex-wrap justify-around">
                {/* Column 1 */}
                <div className="w-full gap-8 md:w-1/3 lg:w-1/4 px-4 mb-6 text-center">
                    <h2 className="font-semibold mb-4 text-red-800 text-2xl">Quick Links</h2>
                    <ul className="mr-4 inline-block text-left">
                        <li className='text-red-800'>Home</li>
                        <li className='text-red-800'>Live Darshan</li>
                        <li className='text-red-800'>Gallery</li>
                    </ul>
                    <ul className="inline-block text-left">
                        <li className='text-red-800'>Social Activity</li>
                        <li className='text-red-800'>About Us</li>
                        <li className='text-red-800'>Contact Us</li>
                    </ul>
                </div>

                {/* Column 2 */}
                <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-6">
                    <h2 className="text-lg font-semibold mb-4 text-red-800 text-2xl">Follow Us On</h2>
                    <ul>
                        <li className='text-red-800'>Email</li>
                        <li className='text-red-800'>Facebook</li>
                        <li className='text-red-800'>Youtube</li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-6">
                    <h2 className="text-lg font-semibold mb-4 text-red-800 text-2xl text-left">Reach Us On</h2>
                    <ul>
                        <li className='text-red-800 text-left'>For Online Services please do contact on
                            9892550915, 7977800664,</li>
                        <li className='text-red-800 text-left'>Shree Muthu Mariamma Temple, Mothilal Nehru Nagar, I.S.D Road, Sion Koliwada, Antophill,
                            Mumbai - 400 037</li>
                    </ul>
                </div>
            </div>
            <h1 className="text-red-800">© Shree, Sion Koliwada, Antophill, Mumbai 400037</h1>
        </footer>
    )
}
