"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast'
import Link from 'next/link';
const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter();

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/manager/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success('Registration successful');
                router.push('/managers/login');
            } else {
                console.error('Registration failed:', data.message);
                toast.error(data.message || 'Registration failed');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            toast.error('Error during registration. Please try again.');
        }
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center text-white">
            <div className="relative z-0 orange-yellow-gradient w-[52%] h-[58%] md:h-[75%] flex flex-col justify-center items-center rounded-xl pb-3 pt-4">
                <div className='flex flex-col gap-6 justify-start items-center w-full pt-12 pb-8 max-h-[calc(100%-4rem)] overflow-y-auto'>
                    <div className="w-full flex justify-center mt-4">
                        <input
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className='bg-lightYellow text-white shadow-xl text-xl py-3 px-4 w-72 rounded-full placeholder-white focus:outline-none'
                        />
                    </div>
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='bg-lightYellow text-white shadow-xl text-xl py-3 px-4 w-72 rounded-full placeholder-white focus:outline-none'
                    />
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-lightYellow text-white shadow-xl text-xl py-3 px-4 w-72 rounded-full placeholder-white focus:outline-none'
                    />
                    <input
                        type="password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className='bg-lightYellow text-white shadow-xl text-xl py-3 px-4 w-72 rounded-full placeholder-white focus:outline-none'
                    />
                    <button 
                        onClick={handleRegister} 
                        className='bg-darkOrange shadow-xl text-xl py-3 font-bold w-72 px-2 rounded-full'
                    >
                        Register
                    </button>
                    <p className='text-xl'>Already have an account? <Link href="/managers/login" className='text-orange font-bold'> Login</Link></p>
                </div>
                <div className="absolute -top-9">
                    <div className="bg-lightYellow p-3 px-5 rounded-xl shadow-xl">
                        <p className='text-4xl font-bold'>Manager Registration</p>
                    </div>
                </div>
            </div>
            
        </div> 
    )
}

export default Register;