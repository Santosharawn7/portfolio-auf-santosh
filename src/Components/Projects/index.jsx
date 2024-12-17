import React from 'react';
import { useTheme } from '../../Context/ThemeContext';
import GitHubRepos from '../GitHubRepos';
import HeroSection from '../Hero';

const Projects = () => {
    const { theme, toggleTheme } = useTheme(); // Get theme and toggle function

    return (
        <>
            {/* Toggle Theme Switch */}
            <HeroSection 
                className="text-white" 
                imageUrl={'https://img.freepik.com/free-photo/gadgets-office-supplies_144627-38086.jpg?t=st=1734413107~exp=1734416707~hmac=94be3cd2b50acbc79a9c14ee75b4eeb96ebf271bf0ae8075efe8454571de68bf&w=2000'} 
                title={'Projects'}
                description={'These are some of the projects done by Santosh Bohara as a part of his career'}
                />
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
            
            <section className={`${theme === 'light' ? 'bg-gray-300' : 'bg-blue-950 text-white'}`}>
            <GitHubRepos/>
            </section>
        </>
    );
};

export default Projects;
