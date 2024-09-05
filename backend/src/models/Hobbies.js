import mongoose from 'mongoose'

const hobbiesSchema = new mongoose.Schema({

}, {versionKey: false})

const hobbies = mongoose.model("hobbies", livroSchema);

export default hobbies;