const db = require('../models')

//create main Model
const User = db.User

//create user

const addUser = async (req, res) => {

    let info = {
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    }

    const user = await User.create(info)
    res.status(200).send(user)
    console.log(user)
}

//get all users

const getUsers = async (req, res) => {

    const users = await User.findAll({})
    res.status(200).send(users)
    console.log(users)

}

//get single user
const getUser = async (req, res) => {
    
    let id = req.params.id

    let user = await User.findOne({ where: { id: id }})
    res.status(200).send(user)
    console.log(user)

}

//update user
const updateUser = async (req, res) => {
    
    let id = req.params.id

    User.update(req.body, {
        where: { id: id }
      })
        .then(num => {
            num == 1 ? res.send({ message: "Cập nhật thành công." }): res.send({ message: "Cập nhật thất bại" });
        })
        .catch(err => {
          res.status(500).send({
            message: "Đã có lỗi xảy ra"
          });
        });
        
}

//delete user
const deleteUser = async (req, res) => {
    
    let id = req.params.id

    User.destroy({where: { id: id }})
        .then(num => {
            num == 1 ? res.send({ message: "Xóa thành công!" }): res.send({ message: "Xóa thất bại" });
        })
        .catch(err => {
          res.status(500).send({
            message: "Đã có lỗi xảy ra"
          });
        });

}

module.exports = {
    addUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
}