import { useTournament } from '@/app/functions/tournamentcontext';

function TournamentName(){
    const { tournament } = useTournament();
    return(
        <p className="text-4xl font-bold text-center">{tournament?.name ?? "Tournament Name"}</p>
    )
}

export default TournamentName; 