const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Abilita CORS per permettere richieste dal frontend
app.use(cors());
app.use(express.json());

// Simuliamo un "database" di post
let posts = [
    { id: 1, title: 'Primo Post', content: 'Contenuto del primo post' },
    { id: 2, title: 'Secondo Post', content: 'Contenuto del secondo post' }
];

// Rotta GET per ottenere tutti i post
app.get('/posts', (req, res) => {
    res.json(posts);
});

// Rotta POST per creare un nuovo post
app.post('/posts', (req, res) => {
    const { title, content } = req.body;
    const newPost = { id: posts.length + 1, title, content };
    posts.push(newPost);
    res.status(201).json(newPost);
});

// Avvio del server sulla porta 3000
app.listen(port, () => {
    console.log(`Server in esecuzione su http://localhost:${port}`);
});
