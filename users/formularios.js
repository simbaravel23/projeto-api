const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Dados iniciais: 10 formulários
let formularios = [
    { id: 1, nome: "Formulário de Cadastro", descricao: "Formulário para cadastro de usuários" },
    { id: 2, nome: "Formulário de Contato", descricao: "Formulário para contato" },
    { id: 3, nome: "Formulário de Feedback", descricao: "Formulário para feedback de serviços" },
    { id: 4, nome: "Formulário de Pesquisa", descricao: "Formulário para pesquisa de satisfação" },
    { id: 5, nome: "Formulário de Inscrição", descricao: "Formulário para inscrição em eventos" },
    { id: 6, nome: "Formulário de Reembolso", descricao: "Formulário para solicitações de reembolso" },
    { id: 7, nome: "Formulário de Solicitação", descricao: "Formulário para solicitações de serviço" },
    { id: 8, nome: "Formulário de Avaliação", descricao: "Formulário para avaliação de produtos" },
    { id: 9, nome: "Formulário de Sugestões", descricao: "Formulário para sugestões de melhorias" },
    { id: 10, nome: "Formulário de Cancelamento", descricao: "Formulário para cancelamento de serviços" }
];

// Rotas para cada formulário

// Formulário 1
app.route('/formularios/1')
    .get((req, res) => res.json(formularios[0]))
    .put((req, res) => {
        formularios[0] = { ...formularios[0], ...req.body };
        res.json(formularios[0]);
    })
    .delete((req, res) => {
        formularios.splice(0, 1);
        res.status(204).send();
    });

// Formulário 2
app.route('/formularios/2')
    .get((req, res) => res.json(formularios[1]))
    .put((req, res) => {
        formularios[1] = { ...formularios[1], ...req.body };
        res.json(formularios[1]);
    })
    .delete((req, res) => {
        formularios.splice(1, 1);
        res.status(204).send();
    });

// Formulário 3
app.route('/formularios/3')
    .get((req, res) => res.json(formularios[2]))
    .put((req, res) => {
        formularios[2] = { ...formularios[2], ...req.body };
        res.json(formularios[2]);
    })
    .delete((req, res) => {
        formularios.splice(2, 1);
        res.status(204).send();
    });

// Formulário 4
app.route('/formularios/4')
    .get((req, res) => res.json(formularios[3]))
    .put((req, res) => {
        formularios[3] = { ...formularios[3], ...req.body };
        res.json(formularios[3]);
    })
    .delete((req, res) => {
        formularios.splice(3, 1);
        res.status(204).send();
    });

// Formulário 5
app.route('/formularios/5')
    .get((req, res) => res.json(formularios[4]))
    .put((req, res) => {
        formularios[4] = { ...formularios[4], ...req.body };
        res.json(formularios[4]);
    })
    .delete((req, res) => {
        formularios.splice(4, 1);
        res.status(204).send();
    });

// Formulário 6
app.route('/formularios/6')
    .get((req, res) => res.json(formularios[5]))
    .put((req, res) => {
        formularios[5] = { ...formularios[5], ...req.body };
        res.json(formularios[5]);
    })
    .delete((req, res) => {
        formularios.splice(5, 1);
        res.status(204).send();
    });

// Formulário 7
app.route('/formularios/7')
    .get((req, res) => res.json(formularios[6]))
    .put((req, res) => {
        formularios[6] = { ...formularios[6], ...req.body };
        res.json(formularios[6]);
    })
    .delete((req, res) => {
        formularios.splice(6, 1);
        res.status(204).send();
    });

// Formulário 8
app.route('/formularios/8')
    .get((req, res) => res.json(formularios[7]))
    .put((req, res) => {
        formularios[7] = { ...formularios[7], ...req.body };
        res.json(formularios[7]);
    })
    .delete((req, res) => {
        formularios.splice(7, 1);
        res.status(204).send();
    });

// Formulário 9
app.route('/formularios/9')
    .get((req, res) => res.json(formularios[8]))
    .put((req, res) => {
        formularios[8] = { ...formularios[8], ...req.body };
        res.json(formularios[8]);
    })
    .delete((req, res) => {
        formularios.splice(8, 1);
        res.status(204).send();
    });

// Formulário 10
app.route('/formularios/10')
    .get((req, res) => res.json(formularios[9]))
    .put((req, res) => {
        formularios[9] = { ...formularios[9], ...req.body };
        res.json(formularios[9]);
    })
    .delete((req, res) => {
        formularios.splice(9, 1);
        res.status(204).send();
    });

// Rota para criar novos formulários
app.post('/formularios', (req, res) => {
    const novoFormulario = {
        id: formularios.length + 1,
        ...req.body
    };
    formularios.push(novoFormulario);
    res.status(201).json(novoFormulario);
});

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
