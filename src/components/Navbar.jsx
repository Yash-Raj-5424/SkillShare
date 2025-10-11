import React, { useState } from 'react'
import { MoonIcon } from '@heroicons/react/24/solid';
import ProfileDropdown from './ProfileDropdown';

function Navbar() {

    const[darkMode, setDarkMode] = useState(false)

    return (
        <>
            <div className='bg-gray-400 px-6 py-4 flex items-center justify-between'>
                <div className='font-bold text-3xl cursor-pointer'>SkillShare</div>    
                <div className='flex-1 mx-12'>
                    <input 
                    className = 'w-full max-w-xl bg-white rounded-md px-4 py-2 border-2 border-gray-300 focus: outline-none focus:border-blue-500' type="text" placeholder='Search for Skills...'/>
                </div>
                <div className='flex items-center gap-6'>
                <div className='px-3 py-2 text-lg font-medium cursor-pointer rounded-md hover:bg-gray-500'>Browse Skills</div>
                <div className='px-3 py-2 text-lg font-medium cursor-pointer rounded-md hover:bg-gray-500'>My Requests</div>
                <button onClick={() => {setDarkMode(!darkMode)}} className='p-2 rounded-full hover: bg-gray-300 cursor-pointer'>
                    <MoonIcon className='h-6 w-6'/>
                </button>
                <div>
                < ProfileDropdown />
                </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
