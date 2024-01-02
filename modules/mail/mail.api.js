const router = require("express").Router();

router.post("/", (req, res, next) => {
  try {
    // call the mail service
  } catch (error) {
    next(error);
  }
});

module.exports = router;
