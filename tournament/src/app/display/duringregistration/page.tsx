"use client"

import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';

import RegisteredTeam from "@/app/components/registeredteam";
import { useTournament } from '@/app/functions/tournamentcontext';
import TournamentName from '@/app/components/tournamentname';

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


function DuringRegistration(){
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
            <div className="">
                <div className="flex justify-center pt-10">
                    <div className="bg-lightYellow p-3 px-5 rounded-xl shadow-xl max-w-96">
                        <TournamentName/>
                    </div>
                </div>
                <div className="pt-3">
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