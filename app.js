const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

const dataPath = path.join(__dirname, 'data');

// Função auxiliar para ler um arquivo JSON
function readJsonFile(filename) {
  const filePath = path.join(dataPath, `${filename}.json`);
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    return null;
  }
}

// Função auxiliar para escrever em um arquivo JSON
function writeJsonFile(filename, data) {
  const filePath = path.join(dataPath, `${filename}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// Rotas para cada formulário
app.get('/form1', (req, res) => {
  const data = readJsonFile('form1');
  res.json(data);
});

app.post('/form1', (req, res) => {
  const data = readJsonFile('form1');
  data.push(req.body);
  writeJsonFile('form1', data);
  res.status(201).json({ message: 'Dados adicionados' });
});

app.put('/form1', (req, res) => {
  // Implementação para atualizar um item específico
  // ...
});

app.delete('/form1', (req, res) => {
  // Implementação para deletar um item específico
  // ...
});

// ... outras rotas para outros formulários

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});