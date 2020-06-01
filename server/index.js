require('dotenv').config();
const massive = require('massive');
const express = require('express');
const controller = require('./controller.js');
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const port = SERVER_PORT;
const app = express();

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(dbInstance => {
    app.set('db', dbInstance); //the first argument is how we reference it, the second is the actual value which is the database
    console.log('db connected');
    
})

app.get('/api/inventory/', controller.getProducts);
app.post('/api/product/', controller.addProduct);
app.delete('/api/product/:id', controller.deleteProduct);
app.put('/api/product/:id', controller.editProduct);


app.listen(port, () => console.log(`Server running on port ${port}`));