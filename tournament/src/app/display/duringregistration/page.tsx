"use client"

import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';

import RegisteredTeam from "@/app/components/registeredteam";
import { useTournament } from '@/app/functions/tournamentcontext';
import TournamentName from '@/app/components/tournamentname';
import Image from 'next/image';
import Ball from '@/app/assets/ball.png';

interface Player {
    name: string;
    scores: {
        score1: number;
        score2: number;
        score3: number;
        score4: number;
        totalScore: number;
    };
}

interface Team {
    teamName: string;
    players: Player[];
    avatarName: string;
}

interface TournamentDetails {
    _id: string; 
    name: string;
    registrationStatus: string;
    qrCodeImageUrl?: string; 
}

function DuringRegistration(){
    const [tournamentDetails, setTournamentDetails] = useState<TournamentDetails | null>(null);

    useEffect(() => {
        const fetchTournamentDetails = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tournaments`);
                const tournaments: TournamentDetails[] = response.data.tournaments; 

                if (tournaments.length > 0) {
                    setTournamentDetails(tournaments[0]); 
                } else {
                    console.log("No tournaments found.");
                    setTournamentDetails(null); 
                }
            } catch (error) {
                console.error("Error fetching tournament details:", error);
            }
        };

        fetchTournamentDetails();
    }, []);

    const { tournament } = useTournament();
    const [teams, setTeams] = useState<Team[]>([]);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/teams`);
                setTeams(response.data.teams);
            } catch (err) {
                console.error(err);
            }
        };

        fetchTeams(); // Initial fetch

        // Set up an interval to fetch teams every 30 seconds
        const intervalId = setInterval(fetchTeams, 30000);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return(
        <div className="flex flex-col items-center text-white pb-10">
            <div className='absolute right-0 top-10'>
                {tournamentDetails && tournamentDetails.qrCodeImageUrl && tournamentDetails.registrationStatus == "Open" ? (
                    <div className="border-8 border-stone-900 bg-white w-[20%] h-[20%] flex justify-center items-center">
                        <div className="relative w-full h-full">
                            <Image 
                                src={tournamentDetails.qrCodeImageUrl} 
                                layout="fixed"
                                width={500}
                                height={500}
                                objectFit="contain"
                                alt='QR code'
                            />
                        </div>
                    </div>
                ): null}
            </div>
            
            <div className="">
                <div className="flex justify-center pt-10">
                    <div className="bg-lightYellow p-3 px-5 rounded-xl shadow-xl max-w-96 flex justify-between">
                        <TournamentName/>
                    </div>
                </div>
                
                <div className="pt-20">
                    <p className="text-center font-bold text-3xl">Registered Teams</p>
                </div>
            </div>

            <div className="flex gap-3 pt-5 flex-wrap px-5 justify-center overflow-y-auto">
                {teams.map((team, index) => (
                    <div key={index}>
                        <RegisteredTeam 
                            teamName={team.teamName} 
                            players={team.players.map(player => player.name)} 
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DuringRegistration;