import Commands from "./Commands";

export default interface CommandsUsuarios<T> extends Commands<T>{
    login(usuario:string,senha:string):any
    loginUCE(usuario:string,cpf:string,email:string,senha:string):any
} 
