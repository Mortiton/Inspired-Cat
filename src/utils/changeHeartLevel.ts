import User from '../models/User';

export async function updateUserHeartLevel(userId: string, newHeartLevel: number) {
    const updatedUser= await User.findOneAndUpdate(
        { userId: userId },
        { $set: { heartLevel: newHeartLevel } }, //increase the heart level by 1
        { new: true, upsert: true } //if the document doesn't exist create one
    );
    return updatedUser
}