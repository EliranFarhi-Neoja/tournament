"use client"

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react';

import ButtonLeft from '@/app/components/btnleft'
import ButtonRight from '@/app/components/btnright'
import TournamentName from '@/app/components/tournamentname';
import toast from 'react-hot-toast';

interface Tournament {
    _id: string; 
    name: string;
    registrationStatus: string;
  }

const AddTeams: React.FC = () => {

    const [teamName, setTeamName] = useState('');
    const [players, setPlayers] = useState(['', '', '', '']); 
    const [avatarName, setAvatarName] = useState('');
    const router = useRouter();

    const [tournament, setTournament] = useState<Tournament | null>(null);

    useEffect(() => {
        const fetchTournamentDetails = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tournaments`);
            const tournaments: Tournament[] = response.data.tournaments;

            if (tournaments.length > 0) {
            setTournament(tournaments[0]); // Set the first tournament in the array
            } else {
            console.log("No tournaments found.");
            setTournament(null); 
            }
        } catch (error) {
            console.error("Error fetching tournament details:", error);
        }
        };

        fetchTournamentDetails();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!tournament) {
            toast.error('No tournament available for registration.');
            return;
        }

        // Transform the players array into the required format
        const formattedPlayers = players.map(playerName => ({
            name: playerName,
            scores: {
                score1: 0,
                score2: 0,
                score3: 0,
                score4: 0,
                totalScore: 0,
            }
        }));

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/submit-team`, {
                teamName,
                players: formattedPlayers,
                avatarName,
                tournamentName: tournament.name,
            });

            if (response.status === 201) {
                toast.success('Team added successfully!');
                // Clear the inputs after successful submission
                setTeamName('');
                setPlayers(['', '', '', '']);
                setAvatarName('');
            }
        } catch (error: any) {
            if (error.response) {
                toast.error(error.response.data.message || 'An error occurred while submitting the team.');
            } else {
                toast.error('An error occurred while submitting the team.');
            }
        }
    };

    const handlePlayerChange = (index: number, value: string) => {
        const newPlayers = [...players];
        newPlayers[index] = value;
        setPlayers(newPlayers);
    };
    return(
        <div className="h-screen relative flex flex-col items-center justify-center text-white">
            <div className="relative orange-yellow-gradient w-[52%] h-[75%] flex flex-col justify-center items-center rounded-xl pb-3">
                <div className='flex justify-center items-center pt-10'>
                    <p className='text-3xl font-bold'>Add a Team</p>
                </div>
                <div className='flex gap-8 flex-wrap justify-center pt-4 pb-4'>
                <form className="relative flex flex-col items-center justify-center" onSubmit={handleSubmit}>
                    
                    <div className="flex-grow w-full px-4 overflow-y-auto max-h-[30vh]">
                        <div className="py-3">
                        <input
                            type="text"
                            placeholder="Enter Team Name"
                            value={teamName}
                            className="rounded-lg py-2 px-3 w-full font-bold text-gray-700"
                            onChange={(e) => setTeamName(e.target.value)}
                            required
                        />
                        </div>

                        {players.map((player, index) => (
                        <div className="py-3" key={index}>
                            <input
                            type="text"
                            placeholder={`Enter Player-${index + 1} Name`}
                            value={player}
                            className="rounded-lg py-2 px-3 w-full font-bold text-gray-700"
                            onChange={(e) => handlePlayerChange(index, e.target.value)}
                            required
                            />
                        </div>
                        ))}
                    </div>

                    <div className="pt-8 pb-3 text-center">
                        <button type="submit" className="bg-darkOrange shadow-xl text-xl py-2 font-bold px-10 rounded-full">
                            Submit
                        </button>
                    </div>

                    <div className="pt-4 mb-4 text-center">
                        <a href="/managers/registeredteams" className="bg-darkOrange shadow-xl text-xl py-2 font-bold px-10 rounded-full">
                            All Teams
                        </a>
                    </div>

                </form>
                </div>


                <div className="absolute -top-9">
                    <div className="bg-lightYellow p-3 px-5 rounded-xl shadow-xl">
                        <TournamentName/>
                    </div>
                </div>
                
            </div>
            <div className='absolute bottom-10 left-10'>
                <ButtonLeft route='/managers/menu'/>
            </div>
            <div className='absolute bottom-10 right-10'>
                <ButtonRight/>
            </div>
            
        </div> 
    )
}

export default AddTeams;