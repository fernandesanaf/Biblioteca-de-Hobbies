import ocorrencia from "../models/Ocorrencia.js";

class OcorrenciaController{

    static async listarOcorrencias(req, res){
        console.log("aqwuieuweu")
        try{
            const listarOcorrencias = await ocorrencia.find({});
            res.status(200).json(listarOcorrencias);
        }catch (erro){
            res.status(500).json({message: `${erro.message} - falha na requisição`})
        }
    }

    static async listarOcorrenciaPorId(req, res){
        try{
            const id = req.params.id;
            const ocorrenciaEncontrado = await ocorrencia.findById(id);
            res.status(200).json(ocorrenciaEncontrado);
        }catch{
            res.status(500).json({message: `${erro.message} - falha em encontrar o ocorrencia`})
        }
    }

    static async cadastrarOcorrencia (req, res){
        const novaOcorrencia = req.body;
        try{
            const ocorrenciaCriada = await ocorrencia.create(novaOcorrencia);
            res.status(201).json({message: "ocorrencia criado", ocorrencia: ocorrenciaCriada});

        }catch (erro){
            res.status(500).json({message: `${erro.message} - falha em cadastrar ocorrencia`})
        }
    }

    static async atualizarOcorrencia (req, res){
        try {
            const id = req.params.id;
            await ocorrencia.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "ocorrencia atualizado"})
        } catch (erro){
            res.status(500).json({message: `${erro.message} - falha em atualizar ocorrencia`})
        }
    }

    static async deletarOcorrencia(req, res){
        try{
            const id = req.params.id
            await ocorrencia.findByIdAndDelete(id);
            res.status(200).json({message: "ocorrencia deletado com sucesso"})

        }catch{
            res.status(500).json({message: `${erro.message} - falha em deletar ocorrencia`})
        }
    }

}

export default OcorrenciaController;