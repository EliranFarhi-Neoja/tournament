import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

interface ResultScoreProps {
    playerName: string;
    totalScore: number;
    position: number; 
    isAlternate: boolean; 
}

const ResultScore: React.FC<ResultScoreProps> = ({ playerName, totalScore, position, isAlternate }) => {
    const renderMedal = () => {
        if (position === 1) return <FontAwesomeIcon icon={faMedal} className="text-2xl text-yellow-500"></FontAwesomeIcon>; 
        if (position === 2) return <FontAwesomeIcon icon={faMedal} className="text-2xl text-gray-300"></FontAwesomeIcon>; 
        if (position === 3) return <FontAwesomeIcon icon={faMedal} className="text-2xl text-amber-700"></FontAwesomeIcon>; 
        if (position === 4) return <FontAwesomeIcon icon={faMedal} className="text-2xl text-orange"></FontAwesomeIcon>;
        return null; 
    };

    const bgColor = isAlternate ? 'bg-lightYellow' : 'bg-orange';

    return (
        <div className="flex items-center gap-3">  
            <div className="w-10">
                {renderMedal()}
            </div>
            
            <div className={`rounded-full ${bgColor} py-2 shadow-xl w-16 text-center`}>
                <p className="text-2xl font-bold px-3">{position}</p>
            </div>
            
            <div className={`w-80 ${bgColor} py-2 rounded-full shadow-xl`}>
                <p className="text-2xl font-bold px-5">{playerName}</p>
            </div>

            <div className={`rounded-full ${bgColor} py-2 shadow-xl w-28 text-center`}>
                <p className="text-2xl font-bold px-5">{totalScore}</p>
            </div>
        </div>
    );
}

export default ResultScore;