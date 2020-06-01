

module.exports = {
    addProduct: (req, res) => {
        //bring in what you need
        const {name, price, img} = req.body;
            console.log(req.body)
        //get the database
        const db = req.app.get('db');

        //run sql query db then the name of your file
        db.add_product(name, price, img)
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send(err));
    },

    getProducts: (req, res) => {
        const db = req.app.get('db');

        db.get_inventory()
        .then(products => res.status(200).send(products))
        .catch(err => res.status(500).send(err));

    },

    deleteProduct: (req, res) => {
        const {id} = req.params;
        const db = req.app.get('db');

        db.delete_product(id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err));

    },

    editProduct: (req, res) => {
        const {id} = req.params;
        const {name, price, img} = req.body;
        const db = req.app.get('db');

        db.edit_product(id, name, price, img)
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send(err));
    }


}