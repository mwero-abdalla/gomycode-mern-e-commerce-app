import mongoose from 'mongoose'

export async function dbConnect(){
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database connecterd successfully!")
    } catch (error) {
        console.log("Coonection Error "+error.message)
    }
}