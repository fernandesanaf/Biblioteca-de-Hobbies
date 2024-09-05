import mongoose from 'mongoose'

const tropesSchema = new mongoose.Schema({

}, {versionKey: false})

const tropes = mongoose.model("tropess", tropesSchema);

export default tropes;