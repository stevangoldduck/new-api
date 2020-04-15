const sql = require('../database/connection.js');

const User = function(user)
{
    this.email = user.email,
    this.name = user.name
}

User.getAll = result => {
    sql.query("SELECT * FROM users", (err,res) => {
        if(err)
        {
            console.log(err);
            result(null,err);
            return;
        }

        result(null,res);
    });
}

User.create =  (data,result) => {
    sql.query("INSERT INTO users SET ?", data, (err,res) => {
        if(err)
        {
            console.log(err);
            result(null,err);
            return;
        }

        result(null,{...data});
    });
}

User.update =  (id,data,result) => {
    sql.query("UPDATE users SET email = ?, name = ? WHERE id = ?",[data.email,data.name,id], (err,res) => {
        if(err)
        {
            console.log(err);
            result(null,err);
            return;
        }

        if(res.affectedRows == 0)
        {
            result({message: "User not found"});
            return;
        }

        result(null,{...data});
    });
}

User.delete =  (id,result) => {
    sql.query("DELETE FROM users WHERE id = ? ",id, (err,res) => {
        if(err)
        {
            console.log(err);
            result(null,err);
            return;
        }

        if(res.affectedRows == 0)
        {
            result({message: "User not found"},null);
            return;
        }

        result(null,res);
    });
}

module.exports = User;