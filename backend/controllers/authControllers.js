const User=require("../models/UserModel")
const jwt=require("jsonwebtoken")

const maxAge=3* 24*60*60 ; //3days
const createToken=(id)=>{
    return jwt.sign({id},"sachin22p",{
expiresIn:maxAge
    })}

//     const handleErrors=(err)=>{
//         let errors={email:"",password:"",book:""};

//         if (err.message === "incorrect email") {
//             errors.email = "That email is not registered";
//           }
        
//           if (err.message === "incorrect password") {
//             errors.password = "That password is incorrect";
//           }
//           if (err.message === "incorrect password") {
//             errors.password = "That password is incorrect";
//           }

//         if(err.code===11000)
//        { errors.email="Email is already registered";
//     return errors;
//     }

//     if(err.message.includes("Users validation failed")){
//         Object.values(err.errors).forEach(({properties})=>{
//             errors[properties.path]=properties.message;
//         })
//     }
//     return errors;
// }
// const { default: UserModel } = require("../models/UserModel");

module.exports.Login =async(req,res,next)=>{ const { email, password } = req.body;
try {
  const user = await User.Login(email, password);
  const token = createToken(user._id);
  res.cookie("jwt", token, { httpOnly: false, maxAge: maxAge * 1000 });
  res.status(200).json({token, user: user._id, status: true });
} catch (err) {
//   const errors = handleErrors(err);
console.log("sachin yaha h error");
res.status(400).json({ error: "Invalid credentials" });
}};


module.exports.Users =async(req,res,next)=>{
    try {
      const users = await User.find({}, 'name'); // Fetch only the 'name' field
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

module.exports.Register =async(req,res,next)=>{
    try{
        console.log(req.body);  
        const {email,password}=req.body  ;
        const user=await User.create({email,password});
        const token =createToken(user._id);

        res.cookie("jwt",token,{
            withCredentials:true,
            httpOnly:false,
            maxAge:maxAge*1000 
        })

        res.status(201).json({user:user._id,created:true});
    }
    catch(err){
       console.log(err); 
    //    const errors =handleErrors(err);
       res.json({err})
    }
};