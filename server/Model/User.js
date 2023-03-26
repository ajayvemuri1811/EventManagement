const mongoose =  require('mongoose');

const UserSchema = new mongoose.Schema (
    {
        email : {
            type : String,
            required: true,
            unique : true,
        },
        password : {
            type : String,
            required: true,
            min : 8,
            max : 20,
        }
    }, {timestamps : true}  
    // timstamps = true => will give the time of creation and updation of the object....
);

const User = mongoose.model("User", UserSchema)

module.exports = User;