//Defined for flexibility, incase I need to deal with user data that does
//not interact with the database
export interface User {
    userId: string;
    heartLevel: number;
    lastPetter: Date;
}