const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Dados iniciais
let formularios = [
    { id: 1, nome: "Formulário de Cadastro", descricao: "Cadastro de usuários" },
    // Outros formulários...
];

// GET - Listar todos os formulários
app.get('/formularios', (req, res) => {
    res.json(formularios);
});

// GET - Obter um formulário específico
app.get('/formularios/:id', (req, res) => {
    const formulario = formularios.find(f => f.id === parseInt(req.params.id));
    if (formulario) {
        res.json(formulario);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// POST - Criar um novo formulário
app.post('/formularios', (req, res) => {
    const novoFormulario = {
        id: formularios.length + 1,
        ...req.body
    };
    formularios.push(novoFormulario);
    res.status(201).json(novoFormulario);
});

// PUT - Atualizar um formulário existente
app.put('/formularios/:id', (req, res) => {
    const index = formularios.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios[index] = { id: formularios[index].id, ...req.body };
        res.json(formularios[index]);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// DELETE - Deletar um formulário
app.delete('/formularios/:id', (req, res) => {
    const index = formularios.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});


// Dados iniciais
let formularios = [
    { id: 2, nome: "Formulário de Contato", descricao: "Formulário para contato" },
];

// GET - Listar todos os formulários
app.get('/formularios', (req, res) => {
    res.json(formularios);
});

// GET - Obter um formulário específico
app.get('/formularios/:id', (req, res) => {
    const formulario = formularios.find(f => f.id === parseInt(req.params.id));
    if (formulario) {
        res.json(formulario);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// POST - Criar um novo formulário
app.post('/formularios', (req, res) => {
    const novoFormulario = {
        id: formularios.length + 1,
        ...req.body
    };
    formularios.push(novoFormulario);
    res.status(201).json(novoFormulario);
});

// PUT - Atualizar um formulário existente
app.put('/formularios/:id', (req, res) => {
    const index = formularios.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios[index] = { id: formularios[index].id, ...req.body };
        res.json(formularios[index]);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// DELETE - Deletar um formulário
app.delete('/formularios/:id', (req, res) => {
    const index = formularios.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// Dados iniciais
let formularios = [
 { id: 3, nome: "Formulário de Feedback", descricao: "Formulário para feedback de serviços" },];

// GET - Listar todos os formulários
app.get('/formularios', (req, res) => {
    res.json(formularios);
});

// GET - Obter um formulário específico
app.get('/formularios/:id', (req, res) => {
    const formulario = formularios.find(f => f.id === parseInt(req.params.id));
    if (formulario) {
        res.json(formulario);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// POST - Criar um novo formulário
app.post('/formularios', (req, res) => {
    const novoFormulario = {
        id: formularios.length + 1,
        ...req.body
    };
    formularios.push(novoFormulario);
    res.status(201).json(novoFormulario);
});

// PUT - Atualizar um formulário existente
app.put('/formularios/:id', (req, res) => {
    const index = formularios.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios[index] = { id: formularios[index].id, ...req.body };
        res.json(formularios[index]);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// DELETE - Deletar um formulário
app.delete('/formularios/:id', (req, res) => {
    const index = formularios.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// Dados iniciais
let formularios = [
   { id: 4, nome: "Formulário de Pesquisa", descricao: "Formulário para pesquisa de satisfação" },
];

// GET - Listar todos os formulários
app.get('/formularios', (req, res) => {
    res.json(formularios);
});

// GET - Obter um formulário específico
app.get('/formularios/:id', (req, res) => {
    const formulario = formularios.find(f => f.id === parseInt(req.params.id));
    if (formulario) {
        res.json(formulario);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// POST - Criar um novo formulário
app.post('/formularios', (req, res) => {
    const novoFormulario = {
        id: formularios.length + 1,
        ...req.body
    };
    formularios.push(novoFormulario);
    res.status(201).json(novoFormulario);
});

// PUT - Atualizar um formulário existente
app.put('/formularios/:id', (req, res) => {
    const index = formularios.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios[index] = { id: formularios[index].id, ...req.body };
        res.json(formularios[index]);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// DELETE - Deletar um formulário
app.delete('/formularios/:id', (req, res) => {
    const index = formularios.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// Dados iniciais
let formularios = [
       { id: 5, nome: "Formulário de Inscrição", descricao: "Formulário para inscrição em eventos" },
];

// GET - Listar todos os formulários
app.get('/formularios', (req, res) => {
    res.json(formularios);
});

// GET - Obter um formulário específico
app.get('/formularios/:id', (req, res) => {
    const formulario = formularios.find(f => f.id === parseInt(req.params.id));
    if (formulario) {
        res.json(formulario);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// POST - Criar um novo formulário
app.post('/formularios', (req, res) => {
    const novoFormulario = {
        id: formularios.length + 1,
        ...req.body
    };
    formularios.push(novoFormulario);
    res.status(201).json(novoFormulario);
});

// PUT - Atualizar um formulário existente
app.put('/formularios/:id', (req, res) => {
    const index = formularios.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios[index] = { id: formularios[index].id, ...req.body };
        res.json(formularios[index]);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// DELETE - Deletar um formulário
app.delete('/formularios/:id', (req, res) => {
    const index = formularios.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// Dados iniciais
let formularios = [
     { id: 6, nome: "Formulário de Reembolso", descricao: "Formulário para solicitações de reembolso" },
];

// GET - Listar todos os formulários
app.get('/formularios', (req, res) => {
    res.json(formularios);
});

// GET - Obter um formulário específico
app.get('/formularios/:id', (req, res) => {
    const formulario = formularios.find(f => f.id === parseInt(req.params.id));
    if (formulario) {
        res.json(formulario);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// POST - Criar um novo formulário
app.post('/formularios', (req, res) => {
    const novoFormulario = {
        id: formularios.length + 1,
        ...req.body
    };
    formularios.push(novoFormulario);
    res.status(201).json(novoFormulario);
});

// PUT - Atualizar um formulário existente
app.put('/formularios/:id', (req, res) => {
    const index = formularios.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios[index] = { id: formularios[index].id, ...req.body };
        res.json(formularios[index]);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// DELETE - Deletar um formulário
app.delete('/formularios/:id', (req, res) => {
    const index = formularios.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// Dados iniciais
let formularios = [
      { id: 7, nome: "Formulário de Solicitação", descricao: "Formulário para solicitações de serviço" },
];

// GET - Listar todos os formulários
app.get('/formularios', (req, res) => {
    res.json(formularios);
});

// GET - Obter um formulário específico
app.get('/formularios/:id', (req, res) => {
    const formulario = formularios.find(f => f.id === parseInt(req.params.id));
    if (formulario) {
        res.json(formulario);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// POST - Criar um novo formulário
app.post('/formularios', (req, res) => {
    const novoFormulario = {
        id: formularios.length + 1,
        ...req.body
    };
    formularios.push(novoFormulario);
    res.status(201).json(novoFormulario);
});

// PUT - Atualizar um formulário existente
app.put('/formularios/:id', (req, res) => {
    const index = formularios.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios[index] = { id: formularios[index].id, ...req.body };
        res.json(formularios[index]);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// DELETE - Deletar um formulário
app.delete('/formularios/:id', (req, res) => {
    const index = formularios.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// Dados iniciais
let formularios = [
  { id: 8, nome: "Formulário de Avaliação", descricao: "Formulário para avaliação de produtos" },
];

// GET - Listar todos os formulários
app.get('/formularios', (req, res) => {
    res.json(formularios);
});

// GET - Obter um formulário específico
app.get('/formularios/:id', (req, res) => {
    const formulario = formularios.find(f => f.id === parseInt(req.params.id));
    if (formulario) {
        res.json(formulario);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// POST - Criar um novo formulário
app.post('/formularios', (req, res) => {
    const novoFormulario = {
        id: formularios.length + 1,
        ...req.body
    };
    formularios.push(novoFormulario);
    res.status(201).json(novoFormulario);
});

// PUT - Atualizar um formulário existente
app.put('/formularios/:id', (req, res) => {
    const index = formularios.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios[index] = { id: formularios[index].id, ...req.body };
        res.json(formularios[index]);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// DELETE - Deletar um formulário
app.delete('/formularios/:id', (req, res) => {
    const index = formularios.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// Dados iniciais
let formularios = [
        { id: 9, nome: "Formulário de Sugestões", descricao: "Formulário para sugestões de melhorias" },

];

// GET - Listar todos os formulários
app.get('/formularios', (req, res) => {
    res.json(formularios);
});

// GET - Obter um formulário específico
app.get('/formularios/:id', (req, res) => {
    const formulario = formularios.find(f => f.id === parseInt(req.params.id));
    if (formulario) {
        res.json(formulario);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// POST - Criar um novo formulário
app.post('/formularios', (req, res) => {
    const novoFormulario = {
        id: formularios.length + 1,
        ...req.body
    };
    formularios.push(novoFormulario);
    res.status(201).json(novoFormulario);
});

// PUT - Atualizar um formulário existente
app.put('/formularios/:id', (req, res) => {
    const index = formularios.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios[index] = { id: formularios[index].id, ...req.body };
        res.json(formularios[index]);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// DELETE - Deletar um formulário
app.delete('/formularios/:id', (req, res) => {
    const index = formularios.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// Dados iniciais
let formularios = [
   { id: 10, nome: "Formulário de Cancelamento", descricao: "Formulário para cancelamento de serviços" },
];

// GET - Listar todos os formulários
app.get('/formularios', (req, res) => {
    res.json(formularios);
});

// GET - Obter um formulário específico
app.get('/formularios/:id', (req, res) => {
    const formulario = formularios.find(f => f.id === parseInt(req.params.id));
    if (formulario) {
        res.json(formulario);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// POST - Criar um novo formulário
app.post('/formularios', (req, res) => {
    const novoFormulario = {
        id: formularios.length + 1,
        ...req.body
    };
    formularios.push(novoFormulario);
    res.status(201).json(novoFormulario);
});

// PUT - Atualizar um formulário existente
app.put('/formularios/:id', (req, res) => {
    const index = formularios.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios[index] = { id: formularios[index].id, ...req.body };
        res.json(formularios[index]);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// DELETE - Deletar um formulário
app.delete('/formularios/:id', (req, res) => {
    const index = formularios.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});



// Iniciar o servidor
app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
