import express, { Router, json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import Team, {getTeamsSortedByScore} from './models/team.model.js';
import Operator from './models/operator.model.js';
import Tournament from './models/tournament.model.js';
import Manager from './models/manager.model.js'
import sendEmail from './sendmail.js';
import QRCode from 'qrcode';
import cors from 'cors';
const app = express();
const router = Router();
import pkg from 'body-parser';
const { json: _json } = pkg;
import token from 'jsonwebtoken';
const { sign, verify } = token;
const SECRET_KEY = process.env.SECRET_KEY;

// Middleware

app.use(json());

app.use(cors({
    origin: ["https://tournament-gray.vercel.app", "http://localhost:3000"],
    methods: ['POST', 'GET', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    credentials: true
}));

// Authentication middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'No token provided' });

  verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) return res.status(403).json({ message: 'Invalid or expired token' });
      req.user = user;
      next();
  });
}


// Routes
const addDummyData = async (req, res) => {
    try {
        // Check if the team already exists
        const existingTeam = await Team.findOne({ teamName: 'dummyTeam' });
        if (existingTeam) {
            return res.status(400).json({ message: 'Team already exists', team: existingTeam });
        }

        // Add a new team with dummy data
        const newTeam = new Team({
            teamName: 'dummyTeam',
            players: ['playerOne', 'playerTwo', 'playerThree', 'playerFour'],
            avatarName: 'dummyAvatar',
        });

        const savedTeam = await newTeam.save();
        return res.status(200).json({ message: 'New team added', team: savedTeam });
    } catch (err) {
        console.error('Error adding team:', err);
        return res.status(500).json({ message: 'Server error', error: err });
    }
};
app.get('/add-dummy-data', addDummyData);


// Save team
// app.post('/api/submit-team', async (req, res) => {
//     const { teamName, players, avatarName } = req.body;

//     try {
//         // Check if the team already exists
//         const existingTeam = await Team.findOne({ teamName });
//         if (existingTeam) {
//             return res.status(400).json({ message: 'Team name already exists' });
//         }

//         // Ensure the number of players is exactly 4
//         if (!Array.isArray(players) || players.length !== 4) {
//             return res.status(400).json({ message: 'Team must have exactly 4 players' });
//         }

//         // Create a new team
//         const newTeam = new Team({
//             teamName,
//             players,
//             avatarName
//         });

//         // Save the team to the database
//         const savedTeam = await newTeam.save();

//         // Send a success response
//         res.status(201).json({ message: 'Team created successfully', team: savedTeam });

//     } catch (error) {
//         // Catch any server errors and send a response
//         res.status(500).json({ message: 'Server error', error: error.message });
//     }
// });

// app.post('/api/submit-team', async (req, res) => {
//     const { teamName, players, avatarName, tournamentName } = req.body;

//     try {
//         // Check if the team already exists
//         const existingTeam = await Team.findOne({ teamName });
//         if (existingTeam) {
//             return res.status(400).json({ message: 'Team name already exists' });
//         }

//         // Ensure the number of players is exactly 4 and they have the required structure
//         if (!Array.isArray(players) || players.length !== 4) {
//             return res.status(400).json({ message: 'Team must have exactly 4 players' });
//         }

//         // Map players to the required structure of playerSchema
//         const formattedPlayers = players.map(player => ({
//             name: player.name, // Ensure this matches playerSchema's structure
//             scores: {
//                 score1: player.scores?.score1 || 0,
//                 score2: player.scores?.score2 || 0,
//                 score3: player.scores?.score3 || 0,
//                 score4: player.scores?.score4 || 0,
//                 totalScore: player.scores?.totalScore || 0,
//             }
//         }));

//         // Find the tournament by name
//         const tournament = await Tournament.findOne({ name: tournamentName });

//         // If the tournament doesn't exist, return an error
//         if (!tournament) {
//             return res.status(404).json({ message: 'Tournament not found' });
//         }

//         // Check if registration for the tournament is still open
//         if (tournament.registrationStatus !== 'Open') {
//             return res.status(400).json({ message: 'Registration for this tournament is closed' });
//         }

//         // Create a new team and associate it with the tournament
//         const newTeam = new Team({
//             teamName: teamName.toLowerCase(), // Ensure the team name is lowercase
//             players: formattedPlayers,
//             avatarName,
//             tournament: tournament._id // Associate the team with the tournament
//         });

//         // Save the team to the database
//         const savedTeam = await newTeam.save();

//         // Send a success response
//         res.status(201).json({ message: 'Team created successfully', team: savedTeam });

//     } catch (error) {
//         // Catch any server errors and send a response
//         console.error("Error submitting team:", error);
//         res.status(500).json({ message: 'Server error', error: error.message });
//     }
// });

app.post('/api/submit-team', async (req, res) => {
    const { teamName, players, avatarName, tournamentName } = req.body;

    console.log('Request body:', req.body); // Debugging line

    try {
        // Check if the team already exists
        const existingTeam = await Team.findOne({ teamName });
        if (existingTeam) {
            return res.status(400).json({ message: 'Team name already exists' });
        }

        // Ensure the number of players is exactly 4 and they have the required structure
        if (!Array.isArray(players) || players.length !== 4) {
            return res.status(400).json({ message: 'Team must have exactly 4 players' });
        }

        // Map players to the required structure of playerSchema
        const formattedPlayers = players.map(player => {
            if (!player.name) {
                throw new Error('Player name is required.');
            }
            return {
                name: player.name,
                scores: {
                    score1: player.scores?.score1 || 0,
                    score2: player.scores?.score2 || 0,
                    score3: player.scores?.score3 || 0,
                    score4: player.scores?.score4 || 0,
                    totalScore: player.scores?.totalScore || 0,
                }
            };
        });

        const tournament = await Tournament.findOne({ name: tournamentName });

        // If the tournament doesn't exist, return an error
        if (!tournament) {
            return res.status(404).json({ message: 'Tournament not found' });
        }

        // Check if registration for the tournament is still open
        if (tournament.registrationStatus !== 'Open') {
            return res.status(400).json({ message: 'Registration for this tournament is closed' });
        }

        // Create a new team and associate it with the tournament
        const newTeam = new Team({
            teamName: teamName.toLowerCase(), // Ensure the team name is lowercase
            players: formattedPlayers,
            avatarName,
            tournament: tournament._id // Associate the team with the tournament
        });

        // Save the team to the database
        const savedTeam = await newTeam.save();

        // Send a success response
        res.status(201).json({ message: 'Team created successfully', team: savedTeam });
    } catch (error) {
        console.error("Error submitting team:", error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});


// Fetch all teams
app.get('/api/teams', async (req, res) => {
    try {
        const teams = await Team.find();

        res.status(200).json({ message: 'Teams retrieved successfully', teams });

    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Fetch all team names
app.get('/api/team-names', async (req, res) => {
    try {
        const teams = await Team.find({}, 'teamName');
        const teamNames = teams.map(team => team.teamName);

        res.status(200).json({ message: 'Team names retrieved successfully', teamNames });
    } catch (error) {
        console.error("Error fetching team names:", error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});


// Fetch players for selected team

app.get('/api/teams/:name/players', async (req, res) => {
    const { name } = req.params;

    try {
        // Find the team by its name (case-insensitive)
        const team = await Team.findOne({ teamName: name.toLowerCase() }); // Ensure the team name is lowercase for consistency
        
        if (!team) {
            return res.status(404).json({ message: 'Team not found' });
        }
        
        // Return the players directly since they are embedded in the team document
        res.status(200).json({ players: team.players });
    } catch (error) {
        console.error("Error fetching players:", error);
        res.status(500).json({ message: 'Server error, unable to fetch players' });
    }
});

app.put('/api/players/:id', async (req, res) => {
    const { id } = req.params;
    const { newName } = req.body;

    try {
        const team = await Team.findOne({ 'players._id': id });
        if (!team) {
            return res.status(404).json({ message: 'Player not found' });
        }

        // Find the specific player and update their name
        const player = team.players.id(id);
        if (player) {
            player.name = newName;
            await team.save(); // Save the updated team document
        }

        res.status(200).json({ message: 'Player name updated successfully' });
    } catch (error) {
        console.error("Error updating player name:", error);
        res.status(500).json({ message: 'Server error, unable to update player name' });
    }
});

// app.put('/api/players/:id/scores', async (req, res) => {
//     const { id } = req.params;
//     const { score1, score2, score3, score4 } = req.body;

//     try {
//         const team = await Team.findOne({ 'players._id': id });
//         if (!team) {
//             return res.status(404).json({ message: 'Player not found' });
//         }

//         const player = team.players.id(id);
//         if (player) {
//             player.scores.score1 = score1;
//             player.scores.score2 = score2;
//             player.scores.score3 = score3;
//             player.scores.score4 = score4;
//             player.scores.totalScore = score1 + score2 + score3 + score4; 
//             await team.save(); 
//         }

//         res.status(200).json({ message: 'Player scores updated successfully' });
//     } catch (error) {
//         console.error("Error updating player scores:", error);
//         res.status(500).json({ message: 'Server error, unable to update player scores' });
//     }
// });

// Route to create a dummy manager
async function createDummyManager() {
    try {
        // Check if a manager with the dummy username already exists
        const existingManager = await Manager.findOne({ username: 'managerusername' });
        
        if (existingManager) {
            console.log('Dummy manager already exists');
            return existingManager;
        }

        // Create a new manager with dummy data
        const newManager = new Manager({
            name: 'Dummy Manager',
            email: 'dummy@example.com',
            username: 'managerusername',
            password: 'managerpass',
            code: 'DUMMY123' // You might want to generate this dynamically
        });

        // Save the new manager to the database
        await newManager.save();

        console.log('Dummy manager created successfully');
        return newManager;
    } catch (error) {
        console.error('Error creating dummy manager:', error);
        throw error;
    }
}

// createDummyManager();

// Manager registration
app.post('/api/manager/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if a manager with the given email or username already exists
        const existingManager = await Manager.findOne({ $or: [{ email }, { username }] });
        
        if (existingManager) {
            if (existingManager.email === email) {
                return res.status(400).json({ message: 'Email already exists' });
            }
            if (existingManager.username === username) {
                return res.status(400).json({ message: 'Username already exists' });
            }
        }

        // Create a new manager
        const newManager = new Manager({
            username,
            email,
            password,
        });

        // Save the new manager to the database
        await newManager.save();

        res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
        console.error('Error during manager registration:', error);
        res.status(500).json({ message: 'Server error during registration' });
    }
});



// Manager login

app.post('/api/manager/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the manager by username
        const manager = await Manager.findOne({ username });

        if (!manager) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Check if the password matches
        if (manager.password !== password) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Create a JWT token
        const token = sign(
            { id: manager._id, username: manager.username, role: 'manager' },
            SECRET_KEY,
            { expiresIn: '24h' }
        );

        // Send the token in the response
        res.status(200).json({
            message: 'Login successful',
            token: token,
            manager: {
                id: manager._id,
                name: manager.name,
                email: manager.email,
                username: manager.username,
                role: 'manager'
            }
        });
    } catch (error) {
        console.error("Error during manager login:", error);
        res.status(500).json({ message: 'Server error during login' });
    }
});


app.put('/api/players/:id/scores', async (req, res) => {
    const { id } = req.params;
    const { score1, score2, score3, score4 } = req.body;

    try {
        // Find the team that contains the player with the given id
        const team = await Team.findOne({ 'players._id': id });
        if (!team) {
            return res.status(404).json({ message: 'Player not found' });
        }

        const player = team.players.id(id);
        if (player) {
            // Update individual player scores
            player.scores.score1 = score1;
            player.scores.score2 = score2;
            player.scores.score3 = score3;
            player.scores.score4 = score4;

            // Recalculate the player's total score
            player.scores.totalScore = score1 + score2 + score3 + score4;
        }

        // Calculate the total score for the team by summing all players' total scores
        const teamTotal = team.players.reduce((acc, player) => acc + player.scores.totalScore, 0);

        // Update the totalTeamScore in the team document
        team.totalTeamScore = teamTotal;

        // Save the updated team document
        await team.save();

        res.status(200).json({
            message: 'Player scores updated successfully',
            teamTotal: teamTotal // Send the updated team total in the response
        });
    } catch (error) {
        console.error("Error updating player scores:", error);
        res.status(500).json({ message: 'Server error, unable to update player scores' });
    }
});



// Save operator
app.post('/api/save-operator', async (req, res) => {
    const { name, email } = req.body;
  
    try {
      const existingOperator = await Operator.findOne({ email });
      if (existingOperator) {
        return res.status(400).json({ message: 'Operator with this email already exists' });
      }
  
      // Generate a random 3-digit code
      const code = Math.floor(100 + Math.random() * 900).toString(); // Random number between 100 and 999
  
      // Create and save the new operator with the generated code
      const newOperator = new Operator({ name, email, code });
      await newOperator.save();
  
      // Send email with the generated code
      await sendEmail(email, code);
  
      // Send a success response
      res.status(201).json({ message: 'Operator created successfully, code stored and email sent.' });
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });  

// Fetch all operators

app.get('/api/operators', async (req, res) => {
    try {
        const operators = await Operator.find();

        res.status(200).json({ message: 'Operators retrieved successfully', operators });

    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

app.delete('/api/operators/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedOperator = await Operator.findByIdAndDelete(id);
        if (!deletedOperator) {
            return res.status(404).json({ message: 'Operator not found' });
        }
        res.status(200).json({ message: 'Operator deleted successfully' });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// In your index.js or relevant backend file
app.post('/api/validate-code', async (req, res) => {
    const { code } = req.body;

    try {
        const operator = await Operator.findOne({ code });

        if (!operator) {
            return res.status(404).json({ message: 'Invalid code' });
        }

        // Create a token with operator info and role
        const operatorToken = sign(
            { 
                id: operator._id, 
                name: operator.name, 
                email: operator.email,
                role: 'operator'
            },
            SECRET_KEY,
            { expiresIn: '24h' }
        );

        res.status(200).json({ 
            message: 'Code is valid, login successful', 
            operatorToken,
            operator: {
                id: operator._id,
                name: operator.name,
                email: operator.email
            }
        });
    } catch (error) {
        console.error('Error validating code:', error.message);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});




// Tournament

app.get('/api/tournaments', async (req, res) => {
    try {
        const tournaments = await Tournament.find(); // Fetch all tournaments
        res.status(200).json({ tournaments });
    } catch (error) {
        console.error("Error fetching tournaments:", error);
        res.status(500).json({ message: 'Server error, unable to fetch tournaments' });
    }
});

app.delete('/api/tournament/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedTournament = await Tournament.findByIdAndDelete(id);
        if (!deletedTournament) {
            return res.status(404).json({ message: 'Tournament not found' });
        }

        // Delete teams associated with the tournament
        await Team.deleteMany({ tournament: id });

        res.status(200).json({ message: 'Tournament and associated teams deleted successfully' });
    } catch (error) {
        console.error("Error deleting tournament and teams:", error);
        res.status(500).json({ message: 'Server error, unable to delete tournament and teams' });
    }
});

app.post('/api/tournament', async (req, res) => {
    const { name } = req.body;

    try {
        // Check if a tournament already exists
        const existingTournament = await Tournament.findOne();
        if (existingTournament) {
            return res.status(400).json({ message: 'A tournament already exists.' });
        }

        // Construct the URL for the QR code
        const baseUrl = 'https://tournament-gray.vercel.app/players/regform';
        // const tournamentUrl = `${baseUrl}/${encodeURIComponent(name)}`; 
        const tournamentUrl = `${baseUrl}`; 

        // Generate the QR code URL
        const qrCodeImageUrl = await QRCode.toDataURL(tournamentUrl); 

        const newTournament = new Tournament({ 
            name, 
            registrationStatus: 'Open',
            qrCodeImageUrl 
        });
        await newTournament.save();

        res.status(201).json({ tournament: newTournament });
    } catch (error) {
        if (error.code === 11000) { // Duplicate key error
            return res.status(400).json({ message: 'A tournament already exists.' });
        }
        console.error('Error creating tournament:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

app.patch('/api/tournament/:id/registration-status', async (req, res) => {
    const { registrationStatus } = req.body;
    const { id } = req.params;

    try {
        // Find the tournament by ID
        const tournament = await Tournament.findById(id);

        if (!tournament) {
            return res.status(404).json({ message: 'Tournament not found' });
        }

        // Update the registration status
        tournament.registrationStatus = registrationStatus;
        await tournament.save();

        // Send success response
        res.status(200).json({ message: `Tournament registration ${registrationStatus}`, tournament });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

app.patch('/api/tournament/:id', async (req, res) => {
    const { id } = req.params;
    const { name } = req.body; // Destructure the name from the request body

    if (!name) {
        return res.status(400).json({ message: 'Tournament name is required' });
    }

    try {
        const updatedTournament = await Tournament.findByIdAndUpdate(
            id,
            { name: name }, // Update the tournament name
            { new: true, runValidators: true } // Options: return the updated document and run validators
        );

        if (!updatedTournament) {
            return res.status(404).json({ message: 'Tournament not found' });
        }

        res.status(200).json({ message: 'Tournament renamed successfully', tournament: updatedTournament });
    } catch (error) {
        console.error("Error renaming tournament:", error);
        res.status(500).json({ message: 'Server error, unable to rename tournament' });
    }
});


// Scores

// Individual

app.get('/api/players', async (req, res) => {
    try {
        // Fetch all teams and populate players
        const teams = await Team.find().select('players').populate('tournament'); 

        // Extract players from all teams
        const players = teams.flatMap(team => team.players);

        // Sort players by totalScore in descending order
        const sortedPlayers = players.sort((a, b) => b.scores.totalScore - a.scores.totalScore);

        res.status(200).json(sortedPlayers);
    } catch (error) {
        console.error("Error fetching players:", error);
        res.status(500).json({ message: 'Server error, unable to fetch players' });
    }
});

// Team

app.get('/api/team-scores', async (req, res) => {
    try {
        const teams = await getTeamsSortedByScore();
        res.status(200).json(teams);
    } catch (error) {
        console.error("Error fetching teams: ", error);
        res.status(500).json({ message: 'Error fetching teams' });
    }
});

// Best score from teams playing currently

app.get('/api/best-score', async (req, res) => {
    try {
        const teams = await Team.find({ status: 'Playing' }).sort({ totalTeamScore: -1 }).limit(1);
        res.status(200).json(teams);
    } catch (error) {
        console.error("Error fetching best score: ", error);
        res.status(500).json({ message: 'Error fetching best score' });
    }
});

// Approve scores

app.put('/api/tournaments/approve-scores', async (req, res) => {
    try {
        const tournament = await Tournament.findOne(); // Find the first tournament
        if (!tournament) {
            return res.status(404).json({ message: 'No tournament found' });
        }

        tournament.areScoresApproved = true; // Set the approval status to true
        await tournament.save();

        return res.status(200).json({ message: 'Scores approved successfully', tournament });
    } catch (error) {
        console.error("Error approving scores:", error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

// Team status to playing

app.patch('/api/teams/status', async (req, res) => {
    const { teams } = req.body;

    if (!Array.isArray(teams) || teams.length === 0) {
        return res.status(400).send('No teams provided');
    }

    try {
        const updatedTeams = await Team.updateMany(
            { teamName: { $in: teams } }, // Match teams by name
            { $set: { status: 'Playing' } } // Update status to "Playing"
        );

        res.status(200).json({ message: 'Team statuses updated successfully', updatedTeams });
    } catch (error) {
        console.error("Error updating team statuses:", error);
        res.status(500).send('Server error');
    }
});


// Team status from playing to played
app.patch('/api/teams/played-status', async (req, res) => {
    const { teams, newStatus } = req.body;

    try {
        await Team.updateMany(
            { teamName: { $in: teams } }, 
            { $set: { status: newStatus } } 
        );

        res.status(200).json({ message: 'Teams updated successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating team status.' });
    }
});



// Example routes
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/something', (req, res) => res.send('Tournament app!!'));

// Final middleware: mount the router
app.use('/api', router);

// Generatetoken function
function generateToken(user) {
    return sign({ id: user.id}, SECRET_KEY, {
        expiresIn: '14d',
    });
}

const uri = process.env.MONGODB_URL;
mongoose.connect(uri, {})
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));

const port = process.env.PORT || 5000; 
app.listen(port, () => console.log(`Server running on port ${port}`));