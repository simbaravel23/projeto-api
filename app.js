const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Rotas para o formulário (exemplo: formulário de cadastro de usuário)
app.get('/users', (req, res) => {
     res.send('Hello, World!');
    // Lógica para buscar todos os usuários (mesmo sem banco de dados, podemos simular um array)
    const users = [{ id: 1, name: 'João' }, { id: 2, name: 'Maria' }];
    res.json(users);
});

app.post('/users', (req, res) => {
    // Lógica para criar um novo usuário
    const newUser = req.body;
    // Simulando um ID auto-incremental
    newUser.id = Date.now();
    // Adicionando o novo usuário a um array (simulando um banco de dados)
    users.push(newUser);
    res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
    // Lógica para atualizar um usuário
    const { id } = req.params;
    const updatedUser = req.body;
    // Encontrando o usuário a ser atualizado (simplificado)
    const userIndex = users.findIndex(user => user.id === Number(id));
    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...updatedUser };
        res.json(users[userIndex]);
    } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
    }
});

app.delete('/users/:id', (req, res) => {
    // Lógica para deletar um usuário
    const { id } = req.params;
    // Encontrando o índice do usuário a ser deletado
    const userIndex = users.findIndex(user => user.id === Number(id));
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

