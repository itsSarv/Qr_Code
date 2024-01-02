const router = require("express").Router();
const apirouter = require("./routes.api");
const uirouter = require("./routes.ui");

router.use("/api/v", apirouter);
router.use("/", uirouter);

module.exports = router;
