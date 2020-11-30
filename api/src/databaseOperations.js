const fs = require('fs');

const DATABASE_FILE = './data/database.json';

const readTodos = () => {
    if (!fs.existsSync(DATABASE_FILE)) {
        return [];
    }

    return JSON.parse(fs.readFileSync(DATABASE_FILE, 'utf8'));
}

const writeTodos = (newTodos) => {
    if (!fs.existsSync('./data')) {
        fs.mkdirSync('./data');
    }

    fs.writeFileSync(DATABASE_FILE, JSON.stringify(newTodos, null, 4));
}

module.exports = {
    readTodos,
    writeTodos
}