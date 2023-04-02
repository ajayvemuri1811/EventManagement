const mongoose =  require('mongoose');

const footregisSchema = new mongoose.Schema (
    {
        teamname : {
            type : String,
            required: true,
            unique : true,
        },
        enrollmentno : {
            type : String,
            required: true,
            min : 5,
            max : 20,
        },
        email: {
            type : String,
            required: true,
            unique : true,
        },
        college: {
            type : String,
            required: true,
            
        }

    }, {timestamps : true}  
    // timstamps = true => will give the time of creation and updation of the object....
);



const footregis = mongoose.model("footregis", footregisSchema);

module.exports = footregis;