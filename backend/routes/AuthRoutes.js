const { Register, Login,Users } = require("../controllers/authControllers");


const router =require("express").Router();

router.get("/",(req,res)=>{
    res.status(200).send({
        message:"Hello"
    })
})

router.get("/users",Users);
router.post("/Register",Register)
router.post("/Login",Login);

module.exports=router;