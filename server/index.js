//IMPORTS
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const cors = require('cors');


//Configure
dotenv.config();
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('Connected to DB'))
.catch(e => console.log(e.message))
const app = express()
const port = process.env.PORT;
app.use(express.json())
app.use(cors());


const userRouter = require('./Routes/userRoutes');
app.use('/customAPI/v1/user', userRouter);

const loginRouter = require('./Routes/loginRoutes');
app.use('/customAPI/v1/login', loginRouter);

const regisRouter = require('./Routes/regisRouter');
app.use('/customAPI/v1/regisRouter', regisRouter);
//start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})