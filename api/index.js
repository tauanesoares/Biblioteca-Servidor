import express from "express"
import cors from "cors"
import conteudo from "../src/conteudo.js"

const servidor = express()
servidor.use(cors())
servidor.use(express.json())


servidor.get("/api", function(requisicao, resposta){
    resposta.status(200).json(conteudo)
})
servidor.get("*", function(requisicao, resposta){
    resposta.sendStatus(404)
})

export default servidor;
//removendo a linha que inicia o servidor localmente para poder fazer deploy no vercel
//servidor.listen(4000, function(){
//    console.log("Servidor em funcionamento!")
//    console.log("http://localhost:4000/")
//})