const emailController = require("../controller/emailController");
const userController = require("../controller/userController");
const express = require("express");
const router = express.Router();

router.route("/user").post(userController.createUser);
router
    .route("/emails")
    .get(emailController.getEmails)
    .post(emailController.postEmails);

router
    .route("/history")
    .get(emailController.getEmails)
    .post(emailController.postHistory);

module.exports = router;
