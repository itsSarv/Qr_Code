const router = require("express").Router();
const qrapi = require("../modules/qr/qr.api");
const mailapi = require("../modules/mail/mail.api");

router.use("/qr", qrapi);
router.use("/mail", mailapi);

module.exports = router;
