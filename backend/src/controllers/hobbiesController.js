import hobbies from "../models/Hobbies";

class HobbiesController{

    static async listarHobbies(res, res){
        try{
            const listarHobbies = await hobbies.find({});
            res.status(200).json(listarHobbies)
        }catch (erro){
            res.status(500).json({message: `${erro.message} - erro na rota get hobbies`})
        }
    }

    static async listarHobbiePorId(req, res){
        try{
            const id = req.params.id;
            const hobbieEncontrado = await hobbies.findById(id);
            res.status(200).json(hobbieEncontrado);
        }catch (erro){
            res.status(500).json({message: `${erro.message} - erro na rota get hobbie por id`})
        }
    }

    static async cadastrarHobbie(req, res){
        const novoHobbie = req.body;
        try{
            const hobbieCriado = await hobbies.create(novoHobbie);
            res.status(200).json({message: "hobbie criado", hobbies: hobbieCriado})

        }catch (erro){
            res.status(500).json({message: `${erro.message} - erro na rota post hobbie`})
        }
    }

    static async atualizarHobbie(req, res){
        try{
            const id = req.params.id;
            await hobbies.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "hobbie atualizado"})
        }catch (erro){
            res.status(500).json({message: `${erro.message} - erro na rota put hobbie`})
        }
    }

    static async deletaHobbie(req, res){
        try{
            const id = req.params.id
            await hobbies.findByIdAndDelete(id)
            res.status(200).json({message: "hobbie deletado"})
        }catch (erro){
            res.status(500).json({message: `${erro.message} - falha em deletar hobbie`})
        }
    }

}
export default HobbiesController;