import mongoose from 'mongoose'

const projetoSchema = new mongoose.Schema({

}, {versionKey: false})

const projeto = mongoose.model("projetos", projetoSchema);

export default projeto;