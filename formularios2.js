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
let formularios2 = [
    { id: 2, nome: "Formulário de Contato", descricao: "Formulário para contato" },
];

// GET - Listar todos os formulários
app.get('/formularios2', (req, res) => {
    res.json(formularios);
});

// GET - Obter um formulário específico
app.get('/formularios2/:id', (req, res) => {
    const formulario = formularios.find(f => f.id === parseInt(req.params.id));
    if (formulario) {
        res.json(formulario);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// POST - Criar um novo formulário
app.post('/formularios2', (req, res) => {
    const novoFormulario = {
        id: formularios.length + 1,
        ...req.body
    };
    formularios.push(novoFormulario);
    res.status(201).json(novoFormulario);
});

// PUT - Atualizar um formulário existente
app.put('/formularios2/:id', (req, res) => {
    const index = formularios.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios[index] = { id: formularios[index].id, ...req.body };
        res.json(formularios[index]);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// DELETE - Deletar um formulário
app.delete('/formularios2/:id', (req, res) => {
    const index = formularios.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// Dados iniciais
let formularios3 = [
 { id: 3, nome: "Formulário de Feedback", descricao: "Formulário para feedback de serviços" },];

// GET - Listar todos os formulários
app.get('/formularios3', (req, res) => {
    res.json(formularios);
});

// GET - Obter um formulário específico
app.get('/formularios3/:id', (req, res) => {
    const formulario3 = formularios3.find(f => f.id === parseInt(req.params.id));
    if (formulario) {
        res.json(formulario);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// POST - Criar um novo formulário
app.post('/formularios3', (req, res) => {
    const novoFormulario = {
        id: formularios.length + 1,
        ...req.body
    };
    formularios.push(novoFormulario);
    res.status(201).json(novoFormulario);
});

// PUT - Atualizar um formulário existente
app.put('/formularios3/:id', (req, res) => {
    const index = formularios3.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios3[index] = { id: formularios[index].id, ...req.body };
        res.json(formularios3[index]);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// DELETE - Deletar um formulário
app.delete('/formularios3/:id', (req, res) => {
    const index = formularios3.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios3.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// Dados iniciais
let formularios4 = [
   { id: 4, nome: "Formulário de Pesquisa", descricao: "Formulário para pesquisa de satisfação" },
];

// GET - Listar todos os formulários
app.get('/formularios4', (req, res) => {
    res.json(formularios4);
});

// GET - Obter um formulário específico
app.get('/formularios4/:id', (req, res) => {
    const formulario = formularios4.find(f => f.id === parseInt(req.params.id));
    if (formulario4) {
        res.json(formulario4);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// POST - Criar um novo formulário
app.post('/formularios4', (req, res) => {
    const novoFormulario = {
        id: formularios.length + 1,
        ...req.body
    };
    formularios4.push(novoFormulario);
    res.status(201).json(novoFormulario);
});

// PUT - Atualizar um formulário existente
app.put('/formularios4/:id', (req, res) => {
    const index = formularios4.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios4[index] = { id: formularios4[index].id, ...req.body };
        res.json(formularios4[index]);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// DELETE - Deletar um formulário
app.delete('/formularios4/:id', (req, res) => {
    const index = formularios4.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios4.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// Dados iniciais
let formularios5 = [
       { id: 5, nome: "Formulário de Inscrição", descricao: "Formulário para inscrição em eventos" },
];

// GET - Listar todos os formulários
app.get('/formularios5', (req, res) => {
    res.json(formularios);
});

// GET - Obter um formulário específico
app.get('/formularios5/:id', (req, res) => {
    const formulario = formularios5.find(f => f.id === parseInt(req.params.id));
    if (formulario5) {
        res.json(formulario5);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// POST - Criar um novo formulário
app.post('/formularios5', (req, res) => {
    const novoFormulario = {
        id: formularios5.length + 1,
        ...req.body
    };
    formularios5.push(novoFormulario);
    res.status(201).json(novoFormulario);
});

// PUT - Atualizar um formulário existente
app.put('/formularios5/:id', (req, res) => {
    const index = formularios5.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios5[index] = { id: formularios5[index].id, ...req.body };
        res.json(formularios[index]);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// DELETE - Deletar um formulário
app.delete('/formularios5/:id', (req, res) => {
    const index = formularios5.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios5.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// Dados iniciais
let formularios6 = [
     { id: 6, nome: "Formulário de Reembolso", descricao: "Formulário para solicitações de reembolso" },
];

// GET - Listar todos os formulários
app.get('/formularios6', (req, res) => {
    res.json(formularios);
});

// GET - Obter um formulário específico
app.get('/formularios6/:id', (req, res) => {
    const formulario = formularios6.find(f => f.id === parseInt(req.params.id));
    if (formulario6) {
        res.json(formulario6);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// POST - Criar um novo formulário
app.post('/formularios6', (req, res) => {
    const novoFormulario = {
        id: formularios6.length + 1,
        ...req.body
    };
    formularios6.push(novoFormulario);
    res.status(201).json(novoFormulario);
});

// PUT - Atualizar um formulário existente
app.put('/formularios6/:id', (req, res) => {
    const index = formularios6.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios6[index] = { id: formularios6[index].id, ...req.body };
        res.json(formularios6[index]);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// DELETE - Deletar um formulário
app.delete('/formularios6/:id', (req, res) => {
    const index = formularios6.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios6.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// Dados iniciais
let formularios7 = [
      { id: 7, nome: "Formulário de Solicitação", descricao: "Formulário para solicitações de serviço" },
];

// GET - Listar todos os formulários
app.get('/formularios7', (req, res) => {
    res.json(formularios7);
});

// GET - Obter um formulário específico
app.get('/formularios7/:id', (req, res) => {
    const formulario = formularios7.find(f => f.id === parseInt(req.params.id));
    if (formulario7) {
        res.json(formulario7);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// POST - Criar um novo formulário
app.post('/formularios7', (req, res) => {
    const novoFormulario = {
        id: formularios7.length + 1,
        ...req.body
    };
    formularios7.push(novoFormulario);
    res.status(201).json(novoFormulario);
});

// PUT - Atualizar um formulário existente
app.put('/formularios7/:id', (req, res) => {
    const index = formularios7.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios7[index] = { id: formularios7[index].id, ...req.body };
        res.json(formularios7[index]);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// DELETE - Deletar um formulário
app.delete('/formularios7/:id', (req, res) => {
    const index = formularios7.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios7.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// Dados iniciais
let formularios8 = [
  { id: 8, nome: "Formulário de Avaliação", descricao: "Formulário para avaliação de produtos" },
];

// GET - Listar todos os formulários
app.get('/formularios8', (req, res) => {
    res.json(formularios8);
});

// GET - Obter um formulário específico
app.get('/formularios8/:id', (req, res) => {
    const formulario = formularios8.find(f => f.id === parseInt(req.params.id));
    if (formulario8) {
        res.json(formulario);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// POST - Criar um novo formulário
app.post('/formularios8', (req, res) => {
    const novoFormulario = {
        id: formularios8.length + 1,
        ...req.body
    };
    formularios8.push(novoFormulario);
    res.status(201).json(novoFormulario);
});

// PUT - Atualizar um formulário existente
app.put('/formularios8/:id', (req, res) => {
    const index = formularios8.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios8[index] = { id: formularios8[index].id, ...req.body };
        res.json(formularios8[index]);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// DELETE - Deletar um formulário
app.delete('/formularios8/:id', (req, res) => {
    const index = formulario8s.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios8.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// Dados iniciais
let formularios9 = [
        { id: 9, nome: "Formulário de Sugestões", descricao: "Formulário para sugestões de melhorias" },

];

// GET - Listar todos os formulários
app.get('/formularios9', (req, res) => {
    res.json(formularios9);
});

// GET - Obter um formulário específico
app.get('/formularios9/:id', (req, res) => {
    const formulario = formularios9.find(f => f.id === parseInt(req.params.id));
    if (formulario9) {
        res.json(formulario9);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// POST - Criar um novo formulário
app.post('/formularios9', (req, res) => {
    const novoFormulario = {
        id: formularios9.length + 1,
        ...req.body
    };
    formularios9.push(novoFormulario);
    res.status(201).json(novoFormulario);
});

// PUT - Atualizar um formulário existente
app.put('/formularios9/:id', (req, res) => {
    const index = formularios9.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios9[index] = { id: formularios9[index].id, ...req.body };
        res.json(formularios9[index]);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// DELETE - Deletar um formulário
app.delete('/formularios9/:id', (req, res) => {
    const index = formularios9.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios9.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// Dados iniciais
let formularios10 = [
   { id: 10, nome: "Formulário de Cancelamento", descricao: "Formulário para cancelamento de serviços" },
];

// GET - Listar todos os formulários
app.get('/formularios10', (req, res) => {
    res.json(formularios);
});

// GET - Obter um formulário específico
app.get('/formularios10/:id', (req, res) => {
    const formulario = formularios10.find(f => f.id === parseInt(req.params.id));
    if (formulario10) {
        res.json(formulario10);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// POST - Criar um novo formulário
app.post('/formularios10', (req, res) => {
    const novoFormulario = {
        id: formularios10.length + 1,
        ...req.body
    };
    formularios10.push(novoFormulario);
    res.status(201).json(novoFormulario);
});

// PUT - Atualizar um formulário existente
app.put('/formularios10/:id', (req, res) => {
    const index = formularios10.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios10[index] = { id: formularios10[index].id, ...req.body };
        res.json(formularios10[index]);
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});

// DELETE - Deletar um formulário
app.delete('/formularios10/:id', (req, res) => {
    const index = formularios10.findIndex(f => f.id === parseInt(req.params.id));
    if (index !== -1) {
        formularios10.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Formulário não encontrado');
    }
});



// Iniciar o servidor
app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});

/*Mockups são representações visuais de um produto, geralmente utilizadas no design de interfaces, como aplicativos, sites ou produtos físicos. Eles servem para mostrar a aparência e a funcionalidade de um produto antes de sua implementação final. Aqui estão alguns pontos principais sobre mockups:

Principais Características dos Mockups
Visualização: Mockups oferecem uma visualização mais realista do produto do que wireframes, mostrando cores, tipografia, imagens e layout.

Interatividade: Embora os mockups sejam tipicamente estáticos, alguns podem incluir elementos interativos, permitindo que os usuários simulem a navegação.

Feedback: Eles são usados para coletar feedback de usuários, clientes ou partes interessadas, ajudando a identificar melhorias antes da fase de desenvolvimento.

Comunicação: Servem como uma ferramenta de comunicação entre designers, desenvolvedores e stakeholders, garantindo que todos tenham uma compreensão clara da visão do produto.

Ferramentas: Mockups podem ser criados usando diversas ferramentas, como Figma, Sketch, Adobe XD, entre outras.

Tipos de Mockups
Baixa Fidelidade: Simples e menos detalhados, usados em fases iniciais de design.
Alta Fidelidade: Mais detalhados e próximos do produto final, com todos os elementos visuais e funcionais.
Exemplos de Uso
Web Design: Mostrar como uma página da web será organizada e estilizada.
Aplicativos Móveis: Exibir a interface de um aplicativo e suas interações.
Produtos Físicos: Criar representações de um produto antes da produção.
Em resumo, os mockups são uma ferramenta essencial no processo de design, ajudando a transformar ideias em representações visuais tangíveis. Se precisar de mais detalhes ou exemplos, fique à vontade para perguntar!

*/


