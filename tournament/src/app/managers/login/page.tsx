"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {toast} from 'react-hot-toast'

const Start: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/manager/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok && data.token) {
                // Store the token in both localStorage and cookie
                localStorage.setItem('managerToken', data.token);
                document.cookie = `managerToken=${data.token}; path=/; max-age=86400`; // Set cookie for 24 hours
                toast.success('Login successful');
                // Redirect to the menu page
                router.push('/managers/menu');
            } else {
                // Handle login failure (e.g., show an error message)
                console.error('Login failed:', data.message);
                toast.error(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
            toast.error('Error during login. Please try again.');
        }
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center text-white">
            <div className="relative z-0 orange-yellow-gradient w-[52%] h-[58%] flex flex-col justify-center items-center rounded-xl pb-3 pt-4">
                <div className='flex flex-col gap-8 justify-center items-center w-full pt-14 pb-8'>
                    <input
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='bg-lightYellow text-white shadow-xl text-xl py-3 px-4 w-72 rounded-full placeholder-white focus:outline-none'
                    />
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-lightYellow text-white shadow-xl text-xl py-3 px-4 w-72 rounded-full placeholder-white focus:outline-none'
                    />
                    <button 
                        onClick={handleLogin} 
                        className='bg-darkOrange shadow-xl text-xl py-3 font-bold w-72 px-2 rounded-full'
                    >
                        Login
                    </button>
                </div>
                <div className="absolute -top-9">
                    <div className="bg-lightYellow p-3 px-5 rounded-xl shadow-xl">
                        <p className='text-4xl font-bold'>Manager Login</p>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Start;