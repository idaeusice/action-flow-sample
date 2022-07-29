const db = require("../models");
const Item = db.item;
const Op = db.Sequelize.Op;

exports.createItem = async (req, res) => {
    const lastid = await Item.max('id');
    const item = {
        id: lastid !== 0 && lastid ? lastid + 1 : 1,
        item: req.body.itemText
    };

    await Item.create(item)
    .then(data => {
        res.status(201).send(data);
    })
    .catch(err => {
        res.status(500).send(err)
        console.log("Some error occurred while creating the item.", err);
    });
};

exports.getItems = async (req, res) => {
    await Item.findAll()
    .then(data => {
        res.send(data);
    })
    .catch((err) => {
        res.status(500).send({ 
            message: err.message || "some error occurred." 
        });
    });
};

exports.deleteItem = (req, res) => {
    Item.destroy({
        where: { id: req.params.id }
    })
    .then(num => {
        res.send({
            message: "Item deleted successfully!"
        });
        res.send({
            message: `Cannot delete item with id=${req.params.id}`
        });
    })
    .catch(err => {
        res.status(500).send({
        message: "Could not delete item with id=" + req.params.id
        });
    });
};