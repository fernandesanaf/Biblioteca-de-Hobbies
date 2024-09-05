import mongoose from 'mongoose'

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    estrelas: { type: Number },
    descricao: { type: String },
    favorito: { type: Boolean },
    dataInicio: { type: String },
    dataTermino: { type: String },
    abandonado: { type: Boolean },
    grupoLeituta: { type: Boolean },
    lido: { type: Boolean },


}, {versionKey: false})

const livro = mongoose.model("livros", livroSchema);

export default livro;