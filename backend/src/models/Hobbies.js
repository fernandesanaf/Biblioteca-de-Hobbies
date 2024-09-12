import mongoose from 'mongoose'

const hobbiesSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    dataCriacao: { type: String },
    descricao: { type: String },
    ativo: { type: Boolean },
}, {versionKey: false})

const hobbies = mongoose.model("hobbies", hobbiesSchema);

export default hobbies;