import express from "express";
import cors from "cors";
import ClienteService from "./services/ClienteService";
import AutorService from "./services/AutorService";
import FuncionarioService from "./services/FuncionarioService";
import ProdutoService from "./services/ProdutoService";



const app = express();
app.use(express.json());
app.use(cors());

const cli = new ClienteService();
const aut = new AutorService();
const fun = new FuncionarioService();
const prod = new ProdutoService();

app.get("/api/v1/cliente/listar",(req,res)=>{
    cli.listarClientes(req,res);
});

app.post("/api/v1/cliente/cadastro",(req,res)=>{
    cli.cadastroCliente(req,res);
})


//######################### Autor ############################
app.get("/api/v1/autor/listar",(req,res)=>{
    aut.listarAutores(req,res);
})

app.post("/api/v1/autor/cadastrar",(req,res)=>{
    aut.cadastroAutor(req,res);
})

//############################ Funcionario ########################################
app.get("/api/v1/funcionario/listar",(req,res)=>{
    fun.listarFuncionarios(req,res);
})

app.post("/api/v1/funcionario/cadastrar",(req,res)=>{
    fun.cadastroFuncionario(req,res);
})



app.listen(5000,()=>{
    console.log(`Online em: http://127.0.0.1:5000`)
});

//############################ Funcionario ########################################
app.get("/api/v1/produto/listar",(req,res)=>{
    prod.listarProdutos(req,res);
})

app.post("/api/v1/produto/cadastrar",(req,res)=>{
    prod.listarProdutos(req,res);
})



app.listen(5000,()=>{
    console.log(`Online em: http://127.0.0.1:5000`)
});