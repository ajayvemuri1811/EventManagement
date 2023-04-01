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
            res.send({err : 'password must be same'});
        } else {
            const newUser = new userModel({
                email, password
            })
            
            await newUser.save();
            res.status(200).send({msg : "user created successfully!!!!"});
        }
        
    }
    catch(err){
        console.log(err.message);
        res.status(409).send({err : 'can\'t create user...'});
    }
}

const loginuser = async (req, res) => {

    try {
        const {email, password} = req.body;
        const check = await userModel.findOne({ email: req.body.email })

        if (check.password === req.body.password) {
            res.status(200).send({msg : "Login Successfull"});
        }

        else {
            res.send("incorrect password")
        }
    } 
    
    catch (e) {
        
        res.status(409).send({err : 'Wrong details'}); 
    
    }


}

module.exports = {getAllUsers, createUser, loginuser};