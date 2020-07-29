var express = require("express");
const { read } = require("fs");
const teamsService = require("../services/teamsService");
var router = express.Router();

/* GET teams. */
router.get("/", async function (req, res, next) {
  let teams;
  try {
    teams = await teamsService.getTeams();
  } catch (error) {
    res.status(500).json("ERROR getting teams", error);
  }

  res.status(200).json(teams);
});

/* GET team by id. */
router.get("/:id", async (req, res, next) => {
  let team;
  const id = parseInt(req.params.id);
  try {
    team = await teamsService.getTeam(id);
  } catch (error) {
    res.status(500).json("ERROR getting team", error);
  }
  res.status(200).json(team);
});

module.exports = router;
