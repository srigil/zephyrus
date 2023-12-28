const {userModel}=require('../databaseconfig/config_db')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const {todoModel}=require('../databaseconfig/config_db')


const userreg=async(req,res)=>{
    var {user,eml,mb,pass}=req.body;
    console.log(user)
    const result=await userModel.find({'email':eml})
    if(!result.length>0){
        bcrypt.hash(pass, saltRounds, function(err, hash) {
            userModel.create({
                username:user,
                password:hash,
                email:eml,
                contact:mb
            })
        });

    
    res.json("data inserted")
}
else{
    res.json("Email already exists")
}
}
const userlog=async(req,res)=>{
    var {eml,pass}=req.body;
    const result=await userModel.findOne({'email':eml})
    
    if(result){
            bcrypt.compare(pass,result.password,function(err, resu) {
            if(resu==true){
            res.json("Succes");
          
        }
       
             else{
             res.json("Failed");
                 }
                });
            }
    else{
        res.json("Email already exists");
    }
// bcrypt.compare(pass, user.pass, function(err, result) {
//     if(result == false){
//         res.json("Login Succes")
//     }
//     else{
//         res.json("login Failed")
//     }
// });
}

const task=async(req,res)=>{
    var title=req.body.title;
    var desc=req.body.desc;
    todoModel.create({
        title:title,
        description:desc,
    })
    res.json("data inserted")
}

const show=async(req,res)=>{
    const rec=await todoModel.find()
    res.json(rec)
}
const DeleteTask = async (req, res) => {
    const { id } = req.body;
    try {
        todoModel.deleteOne({_id:id},function(err,res){
            console.log(err);
        })
        res.send({
            status: 'OK',
            data: "Task Got Deleted"
        })

    } catch (error) {
        console.log(error);
    }
}

module.exports={
    show,
    userreg,
    userlog,
    task,
    DeleteTask,
}