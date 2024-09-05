import mongoose from 'mongoose'

const ocorrenciaSchema = new mongoose.Schema({

}, {versionKey: false})

const ocorrencia = mongoose.model("ocorrencia", ocorrenciaSchema);

export default ocorrencia;