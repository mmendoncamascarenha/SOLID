"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var ClienteService_1 = require("./services/ClienteService");
var AutorService_1 = require("./services/AutorService");
var FuncionarioService_1 = require("./services/FuncionarioService");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
var cli = new ClienteService_1.default();
var aut = new AutorService_1.default();
var fun = new FuncionarioService_1.default();
app.get("/api/v1/cliente/listar", function (req, res) {
    cli.listarClientes(req, res);
});
app.post("/api/v1/cliente/cadastro", function (req, res) {
    cli.cadastroCliente(req, res);
});
//######################### Autor ############################
app.get("/api/v1/autor/listar", function (req, res) {
    aut.listarAutores(req, res);
});
app.post("/api/v1/autor/cadastrar", function (req, res) {
    aut.cadastroAutor(req, res);
});
//############################ Funcionario ########################################
app.get("/api/v1/funcionario/listar", function (req, res) {
    fun.listarFuncionarios(req, res);
});
app.post("/api/v1/funcionario/cadastrar", function (req, res) {
    fun.cadastroFuncionario(req, res);
});
app.listen(5000, function () {
    console.log("Online em: http://127.0.0.1:5000");
});
