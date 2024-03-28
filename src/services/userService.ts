import User from '../models/User';

//Function to increase the heart level
export async function increaseHeartLevel(userId: string) {
    return await User.findOneAndUpdate(
        { userId },
        { $inc: { heartLevel: 1 } }, //increase the heart level by 1
        { new: true, upsert: true } //if the document doesn't exist create one
    );
}

//function to check the heart level
export async function checkHeartLevel(userId: string) {
    //find the user by their ID
    const user= await User.findOne({ userId });
    //return the heart level if user exists
    return user ? user.heartLevel : null
}
