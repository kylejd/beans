const express = require("express");

const router = express.Router();

router.get("/get_user_beans", (req, res) => {
  res.json({
    message: "Hello sir! Have some beans 🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔",
  });
});

module.exports = router;
