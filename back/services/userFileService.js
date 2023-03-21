const fs = require('fs');

class UserFileService {
    readAsJson(filename, callback) {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                callback(err);
                return;
            }

            try {
                const lines = data.toString().split(/,|\n|\s+/);
                const jsonData = lines.map((line, index) => {
                    return {
                        name: line.trim()
                    };
                }).filter((line) => line.name !== "");
                callback(null, JSON.parse(JSON.stringify(jsonData)));
            } catch (err) {
                callback(err);
            }
        });
    }
}

module.exports = UserFileService;
