const mongoose =  require('mongoose');

const badminregisSchema = new mongoose.Schema (
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



const badminregis = mongoose.model("badminregis", badminregisSchema);

module.exports = badminregis;