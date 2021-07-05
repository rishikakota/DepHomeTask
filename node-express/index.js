
const express = require("express");
const app = express();
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});
const bodySchema = Joi.object({
    id: Joi.string().required(),
    login: Joi.string().required().min(3).max(30),
    password: Joi.string().required().regex(/.*?(?:[a-z].*?[0-9]|[0-9].*?[a-z]).*?/),
    age: Joi.number().integer().required().min(4).max(130),
    isDeleted:Joi.boolean().required(),
})

const paramSchema = Joi.object({
    id:Joi.string().required()
})
app.use(express.json());

var users = [{
    
}];

app.post('/users',validator.body(bodySchema), function (req, res) {
    let user = req.body;
    users.push(user);
    res.send(users);
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/users/name/:id',validator.params(paramSchema), function (req, res) {
    let name = users.find((i) => {
        return i.id == req.params.id;
    });

    if (name === undefined) {
        res.status(404).send("User not found");
    }
    else {
        res.send(name.login);
    }
});

app.get('/users/findUser/:id',validator.params(paramSchema), (req, res) => {
    
    let user = _.find(users, { id: req.params.id });

    if (user === undefined) {
        res.status(404).send("User not found");
    }
    else {
        res.send(user);
    }
    
});

app.put('/users/:id',validator.params(paramSchema), (req, res) => {

    let user = users.find((i) => {
        return i.id == req.params.id;
    });

    if (user === undefined) {
        res.status(404).send("User not found");
    }
    
    user.login = req.body.name;
    res.send(users);
});

app.delete('/users/:id',validator.params(paramSchema), (req, res) => {
    
    let user = users.find((i) => {
        return i.id == req.params.id;
    });

    if (user === undefined) {
        res.status(404).send("User not found");
    }

    user.isDeleted = true;
    res.send(users);
});

app.listen(5002, function () {
    console.log("listening on port 5000");
});
