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
                        student: line.trim()
                    };
                }).filter((line) => line.student !== "");
                callback(null, jsonData);
            } catch (err) {
                callback(err);
            }
        });
    }
}

module.exports = UserFileService;
