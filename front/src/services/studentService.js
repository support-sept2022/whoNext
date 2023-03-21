export function getData() {
    return fetch('http://localhost:3002/index') // Ajoutez l'URL complète avec le port 3002
        .then(response => {
            return response.text(); // Récupérez le contenu texte de la réponse
        })
        .then(text => {
            return JSON.parse(text); // Parsez le texte en JSON
        })
        .catch(error => console.error(error));
}