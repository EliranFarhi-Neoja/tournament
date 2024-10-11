import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    scores: {
        score1: { type: Number, default: 0 },
        score2: { type: Number, default: 0 },
        score3: { type: Number, default: 0 },
        score4: { type: Number, default: 0 },
        totalScore: { type: Number, default: 0 },
    },
});

const teamSchema = new mongoose.Schema(
    {
        teamName: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        players: {
            type: [playerSchema], 
            validate: [arrayLimit, 'A team can only have 4 players'],
            required: true,
        },
        avatarName: {
            type: String,
        },
        tournament: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Tournament',
            required: true,
        },
        status: {
            type: String,
            enum: ['Active', 'Playing', 'Played'], 
            default: 'Active', 
            required: true,
        },
        totalTeamScore: { 
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

function arrayLimit(val) {
    return val.length === 4;
}

const getTeamsSortedByScore = async () => {
    return await Team.find().sort({ totalTeamScore: -1 }).populate('tournament');
};

const Team = mongoose.model("Team", teamSchema);

const findOne = async (criteria) => {
    return await Team.findOne(criteria).populate('tournament'); // Populate tournament details if needed
};

const findById = async (id) => {
    return await Team.findById(id).populate('tournament');
};

const findByIdAndUpdate = async (id, update) => {
    return await Team.findByIdAndUpdate(id, update, { new: true }).populate('tournament');
};

export default Team;
export { findOne, findById, findByIdAndUpdate, getTeamsSortedByScore};