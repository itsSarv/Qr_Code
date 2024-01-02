const router = require("express").Router();

router.post("/", (req, res, next) => {
  try {
    //call the qr controller
  } catch (error) {
    next(error);
  }
});

module.exports = router;
