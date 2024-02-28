const router = require("express").Router();

const { signup, getbill } = require("../controller/appController");

router.post("/user/signup", signup);
router.post("/user/getbill", getbill);

module.exports = router;
