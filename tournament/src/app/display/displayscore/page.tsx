"use client"
import { useRouter } from 'next/navigation';
import { useTournament } from '@/app/functions/tournamentcontext';
const DisplayScore: React.FC = () => {
    const { tournament } = useTournament();
    const router = useRouter();
    const handleTeamScore = () => {
        router.push('/display/teamscore'); 
    };

    const handleIndividualScore = () => {
        router.push('/display/individualscore'); 
    };

    const handleTopTeams = () => {
        router.push('/display/topteams'); 
    };

    const handleTopPlayers = () => {
        router.push('/display/topplayers'); 
    };

    return(
        <div className="h-screen flex flex-col items-center justify-center text-white">
            <div className="relative z-0 orange-yellow-gradient w-[90%] md:w-[70%] lg:w-[52%] h-[70vh] md:h-[75vh] lg:h-[80vh] flex flex-col justify-center items-center rounded-xl pb-3 pt-4">
                <div className="pt-8 pb-3">
                    <p className="text-4xl md:text-4xl font-bold drop-shadow-2xl">High Score</p>
                </div>
                <div className='flex gap-4 md:gap-6 lg:gap-8 flex-col justify-start overflow-y-auto pt-8 md:pt-10 lg:pt-14 pb-8 w-full px-4 h-full'>
                    <button onClick={handleTeamScore} className='bg-darkOrange shadow-xl text-xl md:text-2xl py-2 md:py-3 font-bold w-full max-w-xs mx-auto px-2 rounded-full'>
                        Team Score
                    </button>
                    <button onClick={handleIndividualScore} className='bg-darkOrange shadow-xl text-xl md:text-2xl py-2 md:py-3 font-bold w-full max-w-xs mx-auto px-2 rounded-full'>
                        Individual Score
                    </button>
                    <button onClick={handleTopTeams} className='bg-darkOrange shadow-xl text-xl md:text-2xl py-2 md:py-3 font-bold w-full max-w-xs mx-auto px-2 rounded-full'>
                        Top Teams
                    </button>
                    <button onClick={handleTopPlayers} className='bg-darkOrange shadow-xl text-xl md:text-2xl py-2 md:py-3 font-bold w-full max-w-xs mx-auto px-2 rounded-full'>
                        Top Players
                    </button>
                </div>
                <div className="absolute -top-9 -z-10 w-full max-w-md px-4">
                    <div className="bg-lightYellow p-2 md:p-3 rounded-xl shadow-xl">
                        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-center truncate">{tournament?.name ?? "Tournament Name"}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayScore;