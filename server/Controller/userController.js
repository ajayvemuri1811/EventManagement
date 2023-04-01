const userModel = require('../Model/User');
const bcrypt =require('bcryptjs');
const jwt =require('jsonwebtoken');

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
            res.send({err : 'password must be same'});
        } else {
            encryptedPassword = await bcrypt.hash(password, 10);
            const newUser = await userModel.create({
                email: email, // sanitize: convert email to lowercase
                password: encryptedPassword,
              });
            /*const newUser = new userModel({
                email, encryptedPassword
            })*/
            const token = jwt.sign(
                { user_id: newUser._id, email },
                process.env.TOKEN_KEY,
                {
                  expiresIn: "2h",
                }
            );
            newUser.token = token;
            await newUser.save();
            res.status(200).send({msg : "user created successfully!!!!"});
        }
        
    }
    catch(err){
        console.log(err.message);
        res.status(409).send({err : 'can\'t create user...'});
    }
}


module.exports = {getAllUsers, createUser};