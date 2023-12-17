import React from 'react';
import { Parallax } from 'react-parallax';
import socialcover from '../../assets/socialcover.jpg';
import bglogo from '../../assets/ayyappaSwamyLogo.png'
import carel5 from '../../assets/carel5.png'
import carel4 from '../../assets/carel4.png'
import Marquee from "react-fast-marquee";
import { activity } from '../../assets/galleryImages';



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
            <Parallax blur={0} bgImage={bglogo} bgImageStyle={{ height: '100%', width: 'auto', opacity: '0.3' }} bgImageAlt="bg-parallax" strength={500}>
                <div>
                    <div>
                        <Marquee pauseOnHover={true} direction='right'>
                            <div className='m-5'>
                                <img className='h-64 rounded-2xl' src={activity[1]} />
                            </div>
                            <div className='m-5'>
                                <img className='h-64 rounded-2xl' src={activity[2]} />
                            </div>
                            <div className='m-5'>
                                <img className='h-64 rounded-2xl' src={activity[3]} />
                            </div>
                            <div className='m-5'>
                                <img className='h-64 rounded-2xl' src={activity[4]} />
                            </div>
                            <div className='m-5'>
                                <img className='h-64 rounded-2xl' src={activity[5]} />
                            </div>
                            <div className='m-5'>
                                <img className='h-64 rounded-2xl' src={activity[6]} />
                            </div>
                            <div className='m-5'>
                                <img className='h-64 rounded-2xl' src={activity[7]} />
                            </div>
                            <div className='m-5'>
                                <img className='h-64 rounded-2xl' src={activity[8]} />
                            </div>
                            <div className='m-5'>
                                <img className='h-64 rounded-2xl' src={activity[9]} />
                            </div>

                        </Marquee>
                    </div>
                    <div>
                        <div className="rounded-15xl m-5 p-3 md:m-10 md:p-10 lg:m-10 lg:p-10" style={{ boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: 15, backgroundImage: "linear-gradient(292deg, rgba(255, 210, 184, 0.70) 13.74%, rgba(255, 239, 229, 0.70) 92.18%)" }}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing. Consectetur voluptates quas vitae eius ipsum quidem. Sunt consequuntur assumenda, officia quam quia natus laudantium numquam nihil maiores, dicta dolorem alias odit.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing. Consectetur voluptates quas vitae eius ipsum quidem. Sunt consequuntur assumenda, officia quam quia natus laudantium numquam nihil maiores, dicta dolorem alias odit.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing. Consectetur voluptates quas vitae eius ipsum quidem. Sunt consequuntur assumenda, officia quam quia natus laudantium numquam nihil maiores, dicta dolorem alias odit.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing. Consectetur voluptates quas vitae eius ipsum quidem. Sunt consequuntur assumenda, officia quam quia natus laudantium numquam nihil maiores, dicta dolorem alias odit.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing. Consectetur voluptates quas vitae eius ipsum quidem. Sunt consequuntur assumenda, officia quam quia natus laudantium numquam nihil maiores, dicta dolorem alias odit.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing. Consectetur voluptates quas vitae eius ipsum quidem. Sunt consequuntur assumenda, officia quam quia natus laudantium numquam nihil maiores, dicta dolorem alias odit.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing. Consectetur voluptates quas vitae eius ipsum quidem. Sunt consequuntur assumenda, officia quam quia natus laudantium numquam nihil maiores, dicta dolorem alias odit.</p>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
}
