const express = require('express');
const app = express();

const items = require('../controllers/itemController.js');

const router = express.Router(); 

module.exports = function(router){
    //Retrieve all users and create a new user
    router.route('/items') 
    .get((req, res) => {
        items.getItems(req, res);
    })
    .post((req, res) => {
        items.createItem(req, res);
    })
    .delete((req, res) => {
        items.deleteItem(req, res);
    });
};