"use client";

import React, { useEffect, useState } from 'react';
import ButtonLeft from '@/app/components/btnleft';
import ButtonRight from '@/app/components/btnright';
import ResultScore from '@/app/components/resultscore';
import {toast} from 'react-hot-toast';
import TournamentName from '@/app/components/tournamentname';

interface Player {
    _id: string;
    name: string;
    scores: {
        totalScore: number;
    };
}

function SubmitResult() {
    const [players, setPlayers] = useState<Player[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/players`);
                const data = await response.json();
                setPlayers(data);
            } catch (error) {
                console.error("Error fetching players:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlayers();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    // Sort players by totalScore in descending order and get the top 4
    const topPlayers = [...players].sort((a, b) => b.scores.totalScore - a.scores.totalScore).slice(0, 4);

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/tournaments/approve-scores', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to approve scores');
            }

            const result = await response.json();
            toast.success(result.message); 
        } catch (error) {
            console.error("Error submitting result:", error);
            toast.error('An error occurred while submitting scores.');
        }
    };

    return (
        <div className="h-screen relative flex flex-col items-center justify-center text-white">
            <div className="relative bg-darkBlue bg-opacity-70 shadow-2xl w-[52%] h-[68%] flex flex-col justify-center items-center rounded-xl pb-3">
                <div className='flex justify-center items-center pt-12 pb-3'>
                    <p className='text-4xl font-bold'>Top Four Players</p>
                </div>
                <div className='flex gap-8 flex-wrap justify-center pt-3 pb-8 overflow-y-auto mt-2 mb-1'>
                    {topPlayers.map((player, index) => (
                        <ResultScore 
                            key={player._id} 
                            playerName={player.name} 
                            totalScore={player.scores.totalScore} 
                            position={index + 1} 
                            isAlternate={index % 2 !== 0}
                        />
                    ))}
                </div>
                <div className='pt-2'>
                    <button onClick={handleSubmit} className='bg-darkOrange shadow-xl text-xl py-4 font-bold w-72 px-2 rounded-full '>
                        Submit Result
                    </button>
                </div>
                <div className="absolute -top-9">
                    <div className="bg-lightYellow p-3 px-5 rounded-xl shadow-xl">
                        <TournamentName/>
                    </div>
                </div>
                
            </div>
            <div className='absolute bottom-10 left-10'>
                <ButtonLeft />
            </div>
            <div className='absolute bottom-10 right-10'>
                <ButtonRight />
            </div>
        </div> 
    );
}

export default SubmitResult;
