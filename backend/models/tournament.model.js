import mongoose from "mongoose";

const tournamentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    registrationStatus: {
        type: String,
        enum: ['Open', 'Closed'], 
        default: 'Open'
    },
    singletonKey: { 
        type: String,
        default: 'tournament-singleton', 
        unique: true                    
    },
    qrCodeImageUrl: { type: String },
    areScoresApproved: {
        type: Boolean,
        default: false 
    }
}, { timestamps: true });

const Tournament = mongoose.model("Tournament", tournamentSchema);

export default Tournament;