// Four steps to add data to database 

// 1. Call and install mongoose locally
// 2. Connect your mongo Database to vscCode locally by using mongoose.connect
// 3. Justify the mongoose Schema
// 4. Model the schema and export the file
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://riken001:Riken001@riken001.slgs4n1.mongodb.net/")

const userSchema = new mongoose.Schema({
    username: String,
    Firstname:String,
    password:String,
    Lastname:String
})

const User = mongoose.model("User", userSchema)

module.exports={
    User
}