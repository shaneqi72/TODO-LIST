const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes_practice');

const app = express();
const port = 4002;

app.use(bodyParser.json());

app.use(cors());

app.use('', routes);

app.listen(port, () => {
    console.log(`To Do app listening at http://localhose:${port}`);
});


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes_practice');

const app = express();
const port = 4002;

app.use(bodyParser.json());
app.use(cors());
app.use('', routes);

app.listen(port, ()=> {
    console.log(`To Do app is listening at http//localhost:${port}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes_practice');

const app = express();
const port = 4002;

app.use(bodyParser.json());

app.use(cors());

app.use('', routes);

app.listen(port, () => {
    console.log(`the api is listening at http//localhost:${port}`)
})


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes_practice');

const app = express();
const port = 4002;

app.use(bodyParser.json());

app.use(cors());

app.use('', routes);

app.listen(port, () => {
    console.log(`app listening at http//localhost:${port}`)
})


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes_practice');

const app = express();
const port = 4002;

app.use(bodyParser.json());
app.use(cors());
app.use('', routes);

app.listen(port, () => {
    console.log(`api listening at http//localhost:${port}`)
})


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes_practice');

const app = express();
const port = 4002;

app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
    console.log(`This app listening at http//localhost:${port}`)
})


