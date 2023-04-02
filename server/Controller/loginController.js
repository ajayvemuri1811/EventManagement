const userModel = require('../Model/User');
const bcrypt =require('bcryptjs');
const jwt =require('jsonwebtoken');

const loginuser = async (req, res) => {

    try {
        const {email, password} = req.body;
        const check = await userModel.findOne({ email: req.body.email })
       
        if (check && (await bcrypt.compare(password, check.password))) {
            const token = jwt.sign(
                { user_id: userModel._id, email },
                process.env.TOKEN_KEY,
                {
                  expiresIn: "2h",
                }
              );
        
              // save user token
              userModel.token = token;
            res.status(200).send({msg : "Login Successfull"});
        } else {
            res.send("incorrect password")
        }
    } catch (e) {
        res.status(409).send({err : 'Wrong details'}); 
    }
}

module.exports = {loginuser};