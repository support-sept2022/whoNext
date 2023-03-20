const express = require('express');
const cors = require('cors');

// Importer les routes
const userCardRoutes = require('./routes/userCardRoutes');

// Créer l'application Express.js
const app = express();

// Configurer les middlewares
app.use(express.json()); // Gérer les requêtes JSON
app.use(cors()); // Autoriser les requêtes cross-origin


// Définir les routes
app.use('/index', userCardRoutes);

// Gérer les erreurs
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Server error');
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`WOOT WOOT server started on port ${PORT}`);
});
