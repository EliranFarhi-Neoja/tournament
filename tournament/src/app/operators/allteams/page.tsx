"use client"

import Link from 'next/link'; 
import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';

import ButtonLeft from '@/app/components/btnleft';
import ButtonRight from '@/app/components/btnright';
import TeamName from '@/app/components/teamname';
import TournamentName from '@/app/components/tournamentname';

interface Team {
    teamName: string;
}

function AllTeams() {
    const [teamNames, setTeamNames] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTeamNames = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/team-names`);
                setTeamNames(response.data.teamNames);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchTeamNames();
    }, []);

    const SkeletonTeamName = () => (
        <div className="bg-gray-300 animate-pulse rounded-xl w-48 h-12"></div>
    );

    return (
        <div className="h-screen relative flex flex-col items-center justify-center text-white">
            <div className="relative orange-yellow-gradient w-[52%] h-[80vh] max-h-[70%] flex flex-col justify-center items-center rounded-xl pb-3">
                <div className='flex gap-8 flex-wrap justify-center overflow-y-auto pt-14 pb-4 h-full'>
                    {loading ? (
                        Array.from({ length: 6 }).map((_, index) => (
                            <SkeletonTeamName key={index} />
                        ))
                    ) : (
                        <div className="grid grid-cols-2 gap-8 auto-rows-max">
                            {teamNames.map((teamName, index) => (
                                <Link key={index} href={`/operators/selectedteam/${teamName}`} passHref className="h-auto">
                                    <TeamName teamName={teamName} />
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                <div className="absolute -top-9">
                    <div className="bg-lightYellow p-3 px-5 rounded-xl shadow-xl">
                        <TournamentName/>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-10 left-10 opacity-70'>
                <ButtonLeft />
            </div>
            <div className='absolute bottom-10 right-10 opacity-70'>
                <ButtonRight />
            </div>
        </div>
    );
}

export default AllTeams;