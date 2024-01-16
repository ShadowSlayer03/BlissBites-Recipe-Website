let mongoose = require('mongoose');


const connectDB = async() =>{
try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
    console.log('Connected to Database successfully');
} 
catch (error) {
    console.log("Connection failed",error);
}
}

module.exports = connectDB;