import React from 'react';

const Hero = () => {
    return (
        <section className="pt-24 bg-white pb-24">
            <div className="px-12 mx-auto max-w-7xl">
                <div className="w-full mx-auto text-center md:w-11/12 xl:w-9/12 md:text-center ">
                    <h1 className="mb-8 text-4xl sm:text-center font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                        <span>Start Now</span><br /> <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">Save Your</span> <span>Daily Task?</span>
                    </h1>
                    <p className="px-0 sm:text-center mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
                        This is <strong>To Do List app</strong>. It's help to maintain your daily task or schedule.Also if your task or schedule complete or done then you can remove it also if you wish then all data can remove.
                    </p>
                    <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                        <button className='bn632-hover bn22'>
                            <div className='flex flex-row justify-center items-center'>
                                <div>
                                    Get Started
                                </div>
                                <div>
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" ></path></svg>
                                </div>
                            </div>
                        </button>
                        <button className='bn632-hover bn22'>
                            <div className='flex flex-row justify-center items-center'>
                                <div>
                                    Get Help
                                </div>
                                <div>
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                                </div>
                            </div>
                        </button>


                    </div>
                </div>
                <div className="w-full mx-auto mt-20 text-center md:w-10/12">
                    <div className="relative z-0 w-full mt-8">
                        <div className="relative overflow-hidden shadow-2xl">
                            <div className="flex items-center flex-none px-4 bg-green-400 rounded-b-none h-11 rounded-xl">
                                <div className="flex space-x-1.5">
                                    <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                                    <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                                    <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                                </div>
                            </div>
                            <img alt='' src="https://cdn.devdojo.com/images/march2021/green-dashboard.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;