

module.exports = {
    addProduct: (req, res) => {
        //bring in what you need
        const {img, name, price} = req.body;

        //get the database
        const db = req.app.get('db');

        //run sql query db then the name of your file
        db.add_product(img, name, price)
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send(err));
    },

    getProducts: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_inventory()
        .then(products => res.status(200).send(products))
        .catch(err => res.status(500).send(err));

    },

    deleteProduct: (req, res) => {
        const {id} = req.params;
        const db = req.app.get('db');

        db.delete_product(id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err));

    }
}