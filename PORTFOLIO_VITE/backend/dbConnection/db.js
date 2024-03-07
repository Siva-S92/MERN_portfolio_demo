import mongoose from 'mongoose';


export function databaseConnection () {
    const params = {
        useNewUrlParser : true,
        useUnifiedTopology: true,
    };
    try {
        mongoose.connect(process.env.MONGODB_URL);
        console.log("DB connected successfully");
    } catch (error) {
        console.log("DB connection Failed", error);
    }
}