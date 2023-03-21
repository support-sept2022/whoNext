const path = require('path');
const UserFileService = require('../services/userFileService');

class UserController {
    constructor() {
        this.userFileService = new UserFileService();
        this.getUsers = this.getUsers.bind(this);
    }

    getUsers(req, res) {
        const filename = path.join(__dirname, '../data/student.txt');

        this.userFileService.readAsJson(filename, (err, data) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Erreur lors de la lecture du fichier');
            }

            res.send(data);
        });
    }


}

module.exports = UserController;
