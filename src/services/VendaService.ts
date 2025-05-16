import {Request, Response} from "express";
import VendaRepository from "../repositories/VendaRepository";
import Venda from "../classes/Venda";

export default class VendaService{


    venRepository = new VendaRepository();
    async cadastroVenda(req:Request, res:Response){
        const ven:Venda = new Venda();
        // console.log (req.body):
        ven.cliente = req.body.id_cliente;
        ven.funcionario = req.body.id_funcionario;
      
        try{
            const rs = await this.venRepository.Cadastrar(ven);
            return res.status(201).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }       
    }

    async listarVendas(req:Request, res:Response){
        try {
            const rs = await this.venRepository.Listar();
            return res.status(200).json(rs);
        } 
        catch (erro) {
            return res.status(500).json(erro)
        }
    }

}
//aaaaaaaaaaaaaaaaa