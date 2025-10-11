import React from 'react'
import { useState, useEffect, useRef } from 'react'
import {Link} from 'react-router-dom'

function ProfileDropdown() {
    const[open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleOutsideClick(e){
            if(dropdownRef.current && !dropdownRef.current.contains(e.target)){
                setOpen(false);
            }
        }

        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, []);

    return (
        <div className='relative inline-block text-left' ref={dropdownRef}>
            <button
            onClick={() => setOpen(!open)}
            className='w-10 h-10 rounded-full bg-blue-300 text-white font-bold flex items-center justify-center focus: outline-none'
            aria-haspopup = "true"
            aria-expanded = {open}>
                Y {/* hardcoded value for the time being*/}
            </button>

            {open && (
                <div className='absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50'>
                    <ul className='py-1 text-sm text-gray-700'>
                        <li>
                            <Link to= "/profile" 
                            className='block px-4 py-2 hover: bg-gray-200'>
                            </Link>
                            Profile
                        </li>
                        <li>
                            <Link to= "/skills"
                            className='block px-4 py-2 hover: bg-gray-200'>
                            </Link>
                            Skills
                        </li>
                        <li>
                            <Link to = "/requests"
                            className='block px-4 py-2 hover: bg-gray-200'>
                            </Link>
                            Requests
                        </li>
                        <li>
                            <button
                                className='w-full text-left px-4 py-2 hover: bg-gray-200'
                            >
                            Sign Out
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default ProfileDropdown
