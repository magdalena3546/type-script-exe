import express from 'express';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const productsRouters = require('./routes/products.routes');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const usersRouters = require('./routes/users.routes');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false, }));

app.use('/api/products', productsRouters);
app.use('/api/users', usersRouters);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));