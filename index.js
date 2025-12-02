const express = require('express')
const app = express()
const bp = require('body-parser')

app.use(bp.urlencoded())
app.use(bp.json())

app.listen(7000, () => {
    console.log("Servidor Aberto na Porta 7000")
})
app.post("/cadastro", (req, res) => {
    console.log(req.body)
    if (req.body.email != "admin@admin") {
        res.send("Seja bem vindo ao seu perfil")
    }
     else {
        res.send("usuario já existente!")
     }
    res.send("Obrigado por se Cadastrar!")
 



})

app.post("/cadastrosenha", (req, res) => {
    console.log(req.body)
    if (req.body.senha != "admin") {
        res.send("Seja bem vindo ao seu perfil")
    }
     else {
        res.send("senha incorreta")
     }
    res.send(prompt("Obrigado por se Cadastrar!"))
 



})

