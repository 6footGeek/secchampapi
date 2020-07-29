var express = require("express");
const { read } = require("fs");
var router = express.Router();
const challengesService = require("../services/challengesService");
/* GET challenges. */
router.get("/", function (req, res, next) {
  const challenges = challengesService.getChallenges();
  res.status(200).json(challenges);
});

/* GET challenge by id. */
router.get("/:id", (req, res, next) => {
  const id = parseInt(req.params.id);

  const challenge = challengesService.getChallenge(id);
  res.status(200).json(challenge);
});

module.exports = router;
