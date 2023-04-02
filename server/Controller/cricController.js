const cricModel = require('../Model/cricregis');
const bcrypt =require('bcryptjs');
const jwt =require('jsonwebtoken');

const getCric = async(req, res) => {
    try{
        const allUsers = await cricModel.find({});
        res.status(200).send(allUsers);
    }
    catch(err){
        res.status(404).send({err : "Can't Find Team"});
    }
}

const createCric = async(req, res) => {
    try{
        const {teamname, enrollmentno, email, college} = req.body;
        
            const newUser = new cricModel({
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


module.exports = {getCric, createCric};