import { Document } from 'mongoose'

export interface UserDocument extends Document {
    userId: string;
    heartLevel: number;
    lastPetted: Date;
}