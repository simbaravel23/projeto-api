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
    return []; // Retorna um array vazio em caso de erro
  }
}

// Função auxiliar para escrever em um arquivo JSON
function writeJsonFile(filename, data) {
  const filePath = path.join(dataPath, `${filename}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// Rotas dinâmicas para os formulários
app.route('/form/:id')
  .get((req, res) => {
    const { id } = req.params;
    const data = readJsonFile(`form${id}`);
    res.json(data);
  })
  .post((req, res) => {
    const { id } = req.params;
    const data = readJsonFile(`form${id}`);
    data.push(req.body);
    writeJsonFile(`form${id}`, data);
    res.status(201).json({ message: 'Dados adicionados' });
  })
  .put((req, res) => {
    // Implementação para atualizar um item específico
    // ...
  })
  .delete((req, res) => {
    // Implementação para deletar um item específico
    // ...
  });

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});


app.put('/form/:id', (req, res) => {
  const { id } = req.params;
  const { itemId } = req.body; // Supondo que o item tenha um ID
  const data = readJsonFile(`form${id}`);
  const index = data.findIndex(item => item.id === itemId);
  if (index !== -1) {
    data[index] = { ...data[index], ...req.body };
    writeJsonFile(`form${id}`, data);
    res.json({ message: 'Item atualizado' });
  } else {
    res.status(404).json({ message: 'Item não encontrado' });
  }
});

app.delete('/form/:id', (req, res) => {
  const { id } = req.params;
  const { itemId } = req.body;
  const data = readJsonFile(`form${id}`);
  const newData = data.filter(item => item.id !== itemId);
  writeJsonFile(`form${id}`, newData);
  res.json({ message: 'Item removido' });
});
