const router = require('express').Router();
const loginController = require("../controllers/post.controller");


router.get("/post", loginController.findPost);
router.post("/post", loginController.addpost);
router.delete("/post/:id", loginController.deletedpost);
router.put("/post/:id", loginController.updateAll);

module.exports = router;
