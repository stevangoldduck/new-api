module.exports = app => {
    const user = require('../controllers/user.controller.js');

    app.get("/users",user.getAll);

    app.post("/user",user.create);

    app.put("/user/update/:id",user.update);

    app.delete('/user/delete/:id',user.delete);
}