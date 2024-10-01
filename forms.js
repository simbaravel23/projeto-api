const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Raiz da APIs esta funcionando')
})

//alunos
app.get('/Alunos', (req, res) => {
    res.send('Esta funcionando, nome da rota:Alunos')
})

app.post('/Alunos', (req, res) => {
    res.send('aluno!!!')
})

app.put('/Alunos', (req, res) => {
    res.send('aluno incluido!!!')
})

app.delete('/Alunos', (req, res) => {
    res.send('Aluno removido !!!')
})

// objetos 
app.get('/objetos', (reeq, res) => {
    res.send('rota objetos funcionando')
})


app.get('/objetos', (req, res) => {
    res.send('objetos novos')
})

app.post('/objetos', (req, res) => {
    res.send('objeto novo')
})

app.put('/alunos', (req, res) => {
    res.send(`Objeto modificado`)
})

app.delete('/alunos', (req, res) => {
    res.send(`Objeto excluido`)
})

//instrumentos 

app.get('/instrumentos', (req, res) => {
    res.send('rota instrumentos funcionando')
})

app.post('/instrumentos', (req, res) => {
    res.status(201).send('instrumento adicionado')
})

app.put('/instrumentos', (req, res) => {
    res.send('instrumento devolvido!!!')
})

app.delete('/instrumentos', (req, res) => {
    res.send('instrumento removido')
})

//esportes 

app.get('/esportes', (req, res) => {
    res.send('rota esportes esta funcionando')
})

app.post('/esportes', (req, res) => {
    res.send('espirte incluido')
})

app.put('/esportes', (req, res) => {
    res.send('esporte adicionado!!')
})

app.delete('/esportes', (req, res) => {
    res.send('esporte excluido')
})

//rota lazer

app.get('/lazer', (req, res) => {
    res.send('Esta funcionando, nome da rota:lazer')
})

app.post('/lazer', (req, res) => {
    res.status(201).send('atividade incluída')
})

app.put('/lazer', (req, res) => {
    res.send('atividade alterada')
})

app.delete('/lazer', (req, res) => {
    res.send('atividade removida')
})

//equipamentos
app.get('/Equipamentos', (req, res) => {
    res.send('Esta funcionando, nome da rota:(' equipamentos')
})

app.post('/Equipamentos', (req, res) => {
    res.status(201).send('equipamento incluido')
})

app.put('/Equipamentos', (req, res) => {
    res.send('Equipamento alterado')
})

app.delete('/manuEquip', (req, res) => {
    res.send('Equipamento excluído')
})

//animais
app.get('/animais', (req, res) => {
    res.send('Esta funcionando, nome da rota:animais')
})

app.post('/animais', (req, res) => {
    res.status(201).send('animal imcluido')
})

app.put('/animais', (req, res) => {
    res.send('animal alterado')
})

app.delete('/animais', (req, res) => {
    res.send('animal excluído')
})

//usuarios
app.get('/usuario', (req, res) => {
    res.send('Esta funcionando, nome da rota:usuario')
})

app.post('/usuario', (req, res) => {
    res.status(201).send('envio do cadastro do usuario feita')
})

app.put('/usuario', (req, res) => {
    res.send('usuario aceito')
})

app.delete('/usuario', (req, res) => {
    res.send('usuario recusado')
})

//motos
app.get('/motos', (req, res) => {
    res.send('Esta funcionando, nome da rota:motos')
})

app.post('/motos', (req, res) => {
    res.status(201).send('moto incluída ')
})

app.put('/motos', (req, res) => {
    res.send('moto alterada')
})

app.delete('/motos', (req, res) => {
    res.send('moto excluída')
})

//passeio
app.get('/passeio', (req, res) => {
    res.send('Esta funcionando, nome da rota:passeio')
})

app.post('/passeio', (req, res) => {
    res.status(201).send('passeio confirmado')
})

app.put('/passeio', (req, res) => {
    res.send('passeio feita')
})

app.delete('/passeio', (req, res) => {
    res.send('passeio cancelado')
})

app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`)
})