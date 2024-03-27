import User from '../models/User';

export async function increaseHeartLevel(userId: string) {
    return await User.findOneAndUpdate(
        { userId },
        { $inc: { heartLevel: 1 } }, //increase the heart level by 1
        { new: true, upsert: true } //if the document doesn't exist create one
    );
}
