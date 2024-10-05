"use client";

import React, { useEffect, useState } from 'react';
import ButtonLeft from '@/app/components/btnleft';
import ButtonRight from '@/app/components/btnright';
import ResultScore from '@/app/components/resultscore';
import { useTournament } from '@/app/functions/tournamentcontext';

interface Player {
    _id: string;
    name: string;
    scores: {
        totalScore: number;
    };
}

function TopPlayers() {
    const { tournament } = useTournament();
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

    const SkeletonPlayerScore = () => (
        <div className="bg-gray-300 animate-pulse rounded-xl w-96 h-12"></div>
    );

    // Sort players by totalScore in descending order and get the top 4
    const topPlayers = [...players].sort((a, b) => b.scores.totalScore - a.scores.totalScore).slice(0, 4);

    return (
        <div className="h-screen relative flex flex-col items-center justify-center text-white">
            <div className="relative bg-darkBlue bg-opacity-70 shadow-2xl w-[52%] h-[68%] flex flex-col justify-center items-center rounded-xl pb-3">
                <div className='flex justify-center items-center pt-12 pb-3'>
                    <p className='text-4xl font-bold'>Top Four Players</p>
                </div>
                <div className='flex gap-8 flex-wrap justify-center pt-3 pb-8 overflow-y-auto mt-2 mb-1'>
                    {loading ? (
                        <ul className="list-none flex gap-8 flex-wrap justify-center">
                            {[...Array(4)].map((_, index) => (
                                <li key={index}>
                                    <SkeletonPlayerScore />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        topPlayers.map((player, index) => (
                            <ResultScore 
                                key={player._id} 
                                playerName={player.name} 
                                totalScore={player.scores.totalScore} 
                                position={index + 1} 
                                isAlternate={index % 2 !== 0}
                            />
                        ))
                    )}
                </div>

                <div className="absolute -top-9">
                    <div className="bg-lightYellow p-3 px-5 rounded-xl shadow-xl">
                        <p className="text-4xl font-bold">{tournament?.name ?? "Tournament Name"}</p>
                    </div>
                </div>
                
            </div>
            <div className='absolute bottom-10 left-10'>
                <ButtonLeft route='/display/displayscore'/>
            </div>
            <div className='absolute bottom-10 right-10'>
                <ButtonRight />
            </div>
        </div> 
    );
}

export default TopPlayers;