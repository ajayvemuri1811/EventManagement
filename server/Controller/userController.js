const userModel = require('../Model/User');

const getAllUsers = async(req, res) => {
    try{
        const allUsers = await userModel.find({});
        res.status(200).send(allUsers);
    }
    catch(err){
        res.status(404).send({err : "Can't Find Users"});
    }
}

const createUser = async(req, res) => {
    try{
        const {email, password, conpassword} = req.body;
        if(password !== conpassword) {
            res.status(409).send({err : 'password must be same'});
        }
        const newUser = new userModel({
            email, password
        })
        
        await newUser.save();
        res.status(200).send({msg : "user created successfully!!!!"});
    }
    catch(err){
        console.log(err.message);
        res.status(409).send({err : 'can\'t create user...'});
    }
}


module.exports = {getAllUsers, createUser};