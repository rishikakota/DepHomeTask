const db = require('../models');
const Users = db.users;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    const users = {
        id: req.body.id,
        login: req.body.login,
        password: req.body.password,
        age: req.body.age,
        isDeleted: req.body.isDeleted
        
    }

    Users.create(users).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occured while creating the Users table"
        });
    });
};

exports.findAll = (req, res) => {
    Users.findAll().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some erroe occured while retriving users."
        });
    });
};

exports.findOne = (req, res) => {
    Users.findOne({
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: "Error retrieving User with id=" + req.params.id
        });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Users.update(req.body, {
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "User updated successfully."
            });
        } else {
            res.send({
                message: `Cannor update User with id=${id}. Maybe user was not found or req params empty`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error updating User with id=" + id
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Users.destroy({
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send(
                { message: "User was deleted successfully" }
            );
        }
        else {
            res.send({
                message: `Cannot delete user with id=${id}. Maybe user was not founf or req params empty`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Could not delete User with id=" + id
        });
    });
};

exports.deleteAll = (req, res)=> {
    Users.destroy({
        where: {},
        truncate: false
    }).then(nums => {
        res.send({ meassage: `${nums} Users were deleted successfully` })
    }).catch(err => {
        res.status(500).send({
            message: err.message || "some error occured while removing all users."
        });
    });
};

exports.findAllAge = (req, res) => {
    Users.findAll({ where: { age: { [Op.gt]: 20, } } }).then(data => {
        res.send(data)
    }).catch (err => {
        res.status(500).send({
            message: err.message || "Some error occured while retrieving tutorials."
        });
    });
};