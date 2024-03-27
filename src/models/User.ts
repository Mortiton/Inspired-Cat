import { Schema, model } from 'mongoose';

interface User {
    
}
const userSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    heartLevel: { type: Number, default: 0 },
    lastPetted: { type: Date }
});

const User = mongoose.model('User', userSchema);

module.exports = User;