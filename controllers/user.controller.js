const User = require('../models/User.js');

exports.getAll = (req,res) => {
    User.getAll((err,data) => {
        if(err)
        {
            res.status(500).send({message: "Something wrong"});
        }

        else res.send(data);
    });
}

exports.create = (req,res) => {

    if(!req.body)
    {
        res.status(400).send({
            message: "user cannot be null"
        });
    }

    const user = new User({
        email: req.body.email,
        name: req.body.name
    });

    User.create(user, (err,data) => {
        if(err)
        {
            res.status(500).send({message: "Error creating user"});
        }

        else res.send(data);
    });
}

exports.update = (req,res) => {
    
    if(!req.body)
    {
        res.status(400).send({
            message: "user cannot be null"
        });
    }

    User.update(
        req.params.id,
        new User(req.body),
        (err,data) => {
            if(err){
                res.status(400).send({
                    message: "Cannot update user"
                })
            }

            res.send(data);
        }
    )
}

exports.delete = (req,res) => {
    User.delete(
        req.params.id,
        (err,data) => {
            if(err){
                res.status(400).send({
                    message: "Cannot delete user"
                })
            }

            res.send({message: "User deleted"});
        }
    )
}