const router = require('express').Router();
const loginController = require("../controllers/user.controller");


router.post("/user", loginController.adduser);
router.get("/user", loginController.findUser);
router.delete("/user/delete/:id", loginController.deleteduser);


module.exports=router