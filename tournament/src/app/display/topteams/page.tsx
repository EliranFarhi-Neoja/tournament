"use client";

import React, { useEffect, useState } from 'react';

import { useTournament } from '@/app/functions/tournamentcontext';
import ButtonLeft from '@/app/components/btnleft'
import ButtonRight from '@/app/components/btnright'
import TeamScoreComponent from '@/app/components/teamscore';

interface Team {
    _id: string;
    teamName: string;
    totalTeamScore: number;
}

function TopTeams(){
    const { tournament } = useTournament();
    const [teams, setTeams] = useState<Team[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/team-scores`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('Fetched teams:', data);
                setTeams(data);
                setLoading(false);
            } catch (error: any) {
                console.error('Error fetching team scores:', error);
                setLoading(false);
            }
        };

        fetchTeams();
    }, []);

    const SkeletonTeamScore = () => (
        <div className="bg-gray-300 animate-pulse rounded-xl w-64 h-32"></div>
    );

    return(
        <div className="h-screen relative flex flex-col items-center justify-center text-white">
            <div className="relative bg-darkBlue bg-opacity-70 shadow-2xl w-[52%] h-[68%] flex flex-col justify-center items-center rounded-xl pb-3">
                <div className='flex justify-center items-center pt-12 pb-3'>
                    <p className='text-4xl font-bold'>Top Four Teams</p>
                </div>
                <div className='flex gap-8 flex-wrap justify-center pt-3 pb-8 mt-2 mb-1'>
                    {loading ? (
                        <ul className="list-none flex gap-8 flex-wrap justify-center">
                            {[...Array(4)].map((_, index) => (
                                <li key={index}>
                                    <SkeletonTeamScore />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        teams.slice(0, 4).map((team, index) => (
                            <TeamScoreComponent 
                                key={team._id} 
                                teamName={team.teamName} 
                                totalScore={team.totalTeamScore} 
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
            <div className='absolute bottom-10 right-10 opacity-70'>
                <ButtonRight/>
            </div>
            
        </div> 
    )
}

export default TopTeams;