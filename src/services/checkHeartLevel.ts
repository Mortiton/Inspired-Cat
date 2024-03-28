import User from '../models/User';

export async function checkHeartLevel(userId: string) {
    //Find the user, create a new document if user is not found
    const user = await User.findOneAndUpdate(
        { userId: userId }, 
        {},
        {
            new: true, //return the new or updated document
            upsert: true, //create document if one doesn't exist
            setDefaultOnInsert: true // apply schema defaults
        }
    );
    return user;
}