import { Schema, model, } from 'mongoose';
import { UserDocument } from '../interfaces/UserDocument';

const UserSchema = new Schema<UserDocument>({
    userId: { type: String, required: true, unique: true },
    heartLevel: { type: Number, default: 0 },
    lastPetted: { type: Date, default: Date.now }
});

const UserModel = model<UserDocument>('User', UserSchema);

export default UserModel;

