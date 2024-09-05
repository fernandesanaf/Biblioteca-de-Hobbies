import livro from "../models/Livro.js";

class LivroController{

    static async listarLivros(req, res){
        try{
            const listarLivros = await livro.find({});
            res.status(200).json(listarLivros);
        }catch (erro){
            res.status(500).json({message: `${erro.message} - falha na requisição`})
        }
    }

    static async cadastrarLivro (req, res){
        const novoLivro = req.body;
        try{
            const livroCriado = await livro.create(novoLivro);
            res.status(201).json({message: "livro criado", livro: livroCriado});

        }catch (erro){
            res.status(500).json({message: `${erro.message} - falha em cadastrar livro`})
        }
    }

    static async atualizarLivro (req, res){
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "livro atualizado"})
        } catch (erro){
            res.status(500).json({message: `${erro.message} - falha em atualizar livro`})
        }
    }

};

export default LivroController;