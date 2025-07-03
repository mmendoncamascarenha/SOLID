import { resolve } from "path";
import Usuario from "../classes/Usuario";
import CommandsUsuarios from "../Interfaces/CommandsUsuario";
import bcrypt from "bcrypt"
import { rejects } from "assert";
import { conexao } from "../database/Config";

export default class UsuarioRepository implements CommandsUsuarios<Usuario>{
    
    login(usuario: string, senha: string):Promise<any>{
        return new Promise((resolve, reject)=>{
            conexao.query(`SELECT * from usuario WHERE nomeusuario=?`,
            [
                usuario
            ],
        (erro: any,result:any)=>{
            if(erro){
                return reject(erro);
            }
            else{
                return resolve(result);                
            }
        }
        )
    })
    }
    loginUCE(usuario: string, cpf: string, email: string, senha: string) {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: Usuario): Promise<Usuario> {
        return new Promise((resolve,reject)=>{
            conexao.query(`INSERT INTO usuario(nomeusuario, senha, fotousuario)VALUES(?,?,?)`,
                [
                    obj.nomeusuario,
                    obj.senha,
                    obj.fotousuario
                ],
                (erro, result:any)=>{
                    if(erro){
                        return reject(erro);
                    }
                    else{
                        return resolve(result)
                    }
                }
            )
        })
    }
    Listar(): Promise<Usuario[]> {
        throw new Error("Method not implemented.");
    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Usuario): Promise<Usuario> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Usuario> {
        throw new Error("Method not implemented.");
    }

}