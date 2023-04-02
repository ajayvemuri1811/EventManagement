const badminModel = require('../Model/badminregis');
const bcrypt =require('bcryptjs');
const jwt =require('jsonwebtoken');

const getBadmin = async(req, res) => {
    try{
        const allUsers = await badminModel.find({});
        res.status(200).send(allUsers);
    }
    catch(err){
        res.status(404).send({err : "Can't Find Team"});
    }
}

const createBadmin = async(req, res) => {
    try{
        const {teamname, enrollmentno, email, college} = req.body;
        
            const newUser = new badminModel({
                teamname, enrollmentno, email, college
            })
        
            await newUser.save();
            res.status(200).send({msg : "user created successfully!!!!"});
        }
    catch(err){
        console.log(err.message);
        res.status(409).send({err : 'can\'t create user...'});
    }
}


module.exports = {getBadmin, createBadmin};