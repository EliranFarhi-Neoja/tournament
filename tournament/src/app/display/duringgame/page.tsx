"use client"

import axios from 'axios';
import { useEffect, useState } from 'react';
import RegisteredTeam from "@/app/components/registeredteam";
import Monitor from '../../assets/monitor.webp';
import Image from 'next/image';

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
    status: string;  
}
import { useTournament } from '@/app/functions/tournamentcontext';
import TournamentName from '@/app/components/tournamentname';

function DuringGame() {
    const { tournament } = useTournament();
    const [playingTeams, setPlayingTeams] = useState<Team[]>([]);

    useEffect(() => {
        const fetchPlayingTeams = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/teams`);
                const filteredTeams = response.data.teams.filter((team: Team) => team.status === 'Playing');
                setPlayingTeams(filteredTeams);
            } catch (err) {
                console.error(err);
            }
        };

        fetchPlayingTeams(); // Initial fetch
        // Set up an interval to fetch playing teams every 30 seconds
        const intervalId = setInterval(fetchPlayingTeams, 30000);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    const [bestScore, setBestScore] = useState<{ teamName: string; totalTeamScore: number } | null>(null);

    useEffect(() => {
        const fetchBestScore = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/best-score`);
                if (response.data && response.data.length > 0) {
                    const bestTeam = response.data[0];
                    setBestScore({
                        teamName: bestTeam.teamName,
                        totalTeamScore: bestTeam.totalTeamScore
                    });
                }
            } catch (error) {
                console.error("Error fetching best score:", error);
            }
        };

        fetchBestScore();
        // Set up an interval to fetch the best score every 30 seconds
        const intervalId = setInterval(fetchBestScore, 30000);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="h-screen flex flex-col items-center justify-center text-white pb-20">
            <div className="absolute top-6">
                <div className="flex justify-center">
                    <div className="bg-lightYellow p-3 px-5 rounded-xl shadow-xl max-w-96">
                        <TournamentName/>
                    </div>
                </div>
            </div>
    
            <div className="flex gap-5 w-full pt-14">
                <div className="w-[50%] flex flex-col justify-center items-center">
                    <div className="bg-darkBlue bg-opacity-80 shadow-2xl rounded-xl w-[80%] py-8 h-auto flex flex-col justify-center">
                        {playingTeams.length > 0 ? (
                            <>
                                <div className="flex flex-row justify-center items-center gap-3">
                                    {playingTeams.slice(0, 2).map((team, index) => (
                                        <div key={index} className="py-2">
                                            <RegisteredTeam 
                                                teamName={team.teamName} 
                                                players={team.players.map(player => player.name)} 
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-row justify-center items-center gap-3">
                                    {playingTeams.slice(2, 4).map((team, index) => (
                                        <div key={index} className="py-2">
                                            <RegisteredTeam 
                                                teamName={team.teamName} 
                                                players={team.players.map(player => player.name)} 
                                            />
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="text-center text-white text-xl py-10">
                                <p>No teams are playing</p>
                            </div>
                        )}
                    </div>
                </div>
    
                <div className="w-[50%] flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center">
                        <Image src={Monitor} alt="monitor" width={600} />
                    </div>
                    <div className="flex justify-center pt-10">
                        <div className="bg-orange p-3 px-5 rounded-xl shadow-xl max-w-96">
                            <p className="text-4xl font-bold">Best Score: {bestScore?.totalTeamScore}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DuringGame;