import React from 'react';
import projectsData from '../../Data/projectsData.json'; // Update the path as necessary
import { useTheme } from '../../Context/ThemeContext';
import Header from '../Header';
import GitHubRepos from './PJ';

const Projects = () => {
    const { theme, toggleTheme } = useTheme(); // Get theme and toggle function

    return (
        <>
            {/* Toggle Theme Switch */}
            <div className="fixed top-4 right-4 z-50"> {/* Fixed positioning ensures it's always at the top-right of the screen */}
                
                <label className="relative inline-flex items-center cursor-pointer">
                    
                    <input 
                        className="sr-only peer" 
                        type="checkbox" 
                        onChange={toggleTheme} // Trigger toggleTheme on change
                        checked={theme === 'dark'} // Ensure the state of the checkbox matches the theme
                    />
                    <div className="w-24 h-12 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-10 before:w-10 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-10 after:h-10 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"></div>
                </label>
            </div>
            
            <section className={`py-24 md:py-40 ${theme === 'light' ? 'bg-gray-300' : 'bg-blue-950 text-white'}`}>
            
            <div className=' mx-auto '>
            <Header/>
            </div>
                <div className="container px-4 mx-auto">
                    {/* Main Content */}
                    
                    <div className="flex items-center text-center mb-12">
                        
                        <span className="font-heading text-center text-xl">My Projects</span>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        {projectsData.map((project) => (
                            <div key={project.id} className="w-full lg:w-1/3 px-4 mb-8"> {/* Adjust card width for responsiveness */}
                                {/* New Card Structure */}
                                <div className={`max-w-sm bg-white border border-gray-200 rounded-lg shadow ${theme === 'light' ? '' : 'dark:bg-gray-800 dark:border-gray-700'}`}>
                                    <a href={project.link}>
                                        <img className="rounded-t-lg" src={project.image} alt={project.title} /> {/* Use project image */}
                                    </a>
                                    <div className="p-5">
                                        <a href={project.link}>
                                            <h5 className={`mb-2 text-2xl font-bold tracking-tight ${theme === 'light' ? 'text-gray-900' : 'dark:text-white'}`}>{project.title}</h5>
                                        </a>
                                        <p className={`mb-3 font-normal ${theme === 'light' ? 'text-gray-700' : 'dark:text-gray-400'}`}>
                                            {project.description} {/* Use project description */}
                                        </p>
                                        {/* New Button Design */}
                                        <a href={project.link}>
                                            <button className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24px" width="24px">
                                                    <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                                                    <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
                                                    <g id="SVGRepo_iconCarrier">
                                                        <g id="Interface / Download">
                                                            <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="#f1f1f1" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" id="Vector"></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                                Read more
                                                <div className="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
                                                    Download
                                                </div>
                                                
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <GitHubRepos/>
                </div>
                
            </section>
        </>
    );
};

export default Projects;
