"use client"

import ButtonLeft from '@/app/components/btnleft'
import ButtonRight from '@/app/components/btnright'
import PlayerScore from '@/app/components/playerscore';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TournamentName from '@/app/components/tournamentname';

interface Player {
    _id: string;
    name: string;
    scores: {
        score1: number;
        score2: number;
        score3: number;
        score4: number;
        totalScore: number;
        personalBest: number; // This field will be calculated on the frontend
    };
}

const SelectedTeam = ({ params }: { params: { name: string } }) => {
    const { name } = params;
    const [players, setPlayers] = useState<Player[]>([]);
    const [teamTotal, setTeamTotal] = useState<number>(0);

    useEffect(() => {
        fetchPlayers();
    }, [name]);

    const fetchPlayers = async () => {
        if (name) {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/teams/${name}/players`);
                const playersWithPersonalBest = response.data.players.map((player: Player) => ({
                    ...player,
                    scores: {
                        ...player.scores,
                        personalBest: Math.max(player.scores.score1, player.scores.score2, player.scores.score3, player.scores.score4)
                    }
                }));
                setPlayers(playersWithPersonalBest);

                const initialTeamTotal = playersWithPersonalBest.reduce((acc: number, player: Player) => acc + player.scores.totalScore, 0);
                setTeamTotal(initialTeamTotal);

            } catch (err) {
                console.error(err);
            }
        }
    };

    const updatePlayerName = async (playerId: string, newName: string) => {
        console.log(newName);
        try {
            await axios.put(`http://localhost:8000/api/players/${playerId}`, { newName });
            fetchPlayers();
        } catch (err) {
            console.error(err);
        }
    };

    const updatePlayerScores = async (playerId: string, updatedScores: any) => {
        try {
            const response = await axios.put(`http://localhost:8000/api/players/${playerId}/scores`, updatedScores);
            fetchPlayers(); // Refresh players' data

            // Update team total with response
            setTeamTotal(response.data.teamTotal);

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="min-h-screen relative flex flex-col items-center justify-center text-white p-4">
            <div className="relative orange-yellow-gradient w-full max-w-6xl h-auto min-h-[80vh] flex flex-col justify-center items-center rounded-xl pb-3 px-12 my-12">
                <div className='pb-8 pt-5'>
                    <p className='text-3xl md:text-5xl font-bold text-center'>{decodeURIComponent(name)} Team</p>
                </div>
                <div className='w-full'>
                    <div className='flex justify-between items-center w-full pb-4 font-bold text-xs md:text-sm'>
                        <div className='w-72 px-5'>
                            <p>Player name</p>
                        </div>
                        <div className='w-20 text-center'>
                            <p>Score-1</p>
                        </div>
                        <div className='w-20 text-center'>
                            <p>Score-2</p>
                        </div>
                        <div className='w-20 text-center'>
                            <p>Score-3</p>
                        </div>
                        <div className='w-20 text-center'>
                            <p>Score-4</p>
                        </div>
                        <div className='w-20 text-center'>
                            <p>Personal best</p>
                        </div>
                        <div className='w-20 text-center'>
                            <p>Total</p>
                        </div>
                    </div>
                    <div className='w-full space-y-4'>
                        {players.map((player, index) => (
                            <PlayerScore
                                key={player._id}
                                playerId={player._id}
                                playerIndex={index}
                                playerName={player.name}
                                scores={player.scores}
                                onPlayerNameUpdate={updatePlayerName}
                                onScoresUpdate={updatePlayerScores} 
                            />
                        ))}
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center w-full pt-8'>
                    <div className='w-full md:w-1/2 text-center md:text-right mb-4 md:mb-0'>
                        {/* <button className='py-2 shadow-lg w-48 font-bold text-xl rounded-3xl bg-darkOrange border border-gray-700'>Player Turn</button> */}
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col md:flex-row justify-center md:justify-end items-center gap-2 md:gap-5'>
                        <p className='font-bold'>Team total:</p>
                        <div className='bg-lightYellow rounded-xl flex items-center justify-center w-32 py-2'>
                            <p className='text-2xl font-bold'>{teamTotal}</p>
                        </div>
                    </div>
                </div>

                <div className="absolute -top-9 left-1/2 transform -translate-x-1/2">
                    <div className="bg-lightYellow p-3 px-5 rounded-xl shadow-xl">
                        <TournamentName/>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-4 left-4 md:bottom-10 md:left-10'>
                <ButtonLeft route='/operators/allteams' />
            </div>
            <div className='absolute bottom-4 right-4 md:bottom-10 md:right-10 opacity-70'>
                <ButtonRight />
            </div>
        </div>
    );
};

export default SelectedTeam;