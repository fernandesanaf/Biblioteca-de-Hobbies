import mongoose from 'mongoose'

const ocorrenciaSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    data: { type: String, required: true },
    descricao: { type: String },
    tempoGasto: { type: String },
    tipoOcorrencia: { type: String },
    referenciaOcorrencia: { type: String }

}, {versionKey: false})

const ocorrencia = mongoose.model("ocorrencia", ocorrenciaSchema);

export default ocorrencia;