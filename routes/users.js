var express = require("express");
var router = express.Router();
const cors = require("cors");

let users = [
  {
    username: "test",
    password: "test",
  },
  {
    username: "Katten",
    password: "kissen",
  },
];

router.use(cors());

/* GET users listing. */
router.get("/", function (req, res) {
  res.json(users);
});

router.post("/login", (req, res) => {
  console.log("req.body", req.body);
  let foundUser = users.find((user) => {
    console.log("i return ");
    return (
      user.username == req.body.username && user.password == req.body.password
    );
  });
  console.log("founduser", foundUser);

  res.send(foundUser);
});

// router.post("/createUser", (req, res) => {
//   let NewUser = { ...req.body, id: users.length + 1 };
//   users.push(NewUser);
//   res.redirect("/");
// });

module.exports = router;
