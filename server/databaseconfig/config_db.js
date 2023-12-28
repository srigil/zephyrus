const mongoose=require('mongoose')

main().catch((err)=>console.log(err))
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log("database connected")
}

const userSchema=new mongoose.Schema({
    username:String,
    email:String,
    phone:String,
    password:String
})

let userModel=new mongoose.model("userreg",userSchema)


const todoSchema=new mongoose.Schema({
    title:String,
    description:String
})

let todoModel=new mongoose.model("todo",todoSchema)


module.exports={
    userModel,
    todoModel,
}

