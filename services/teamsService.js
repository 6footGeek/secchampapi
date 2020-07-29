const teams = [
  { id: 1, name: "test1", members: [{ name: "andy" }] },
  { id: 2, name: "test2", members: [{ name: "jorge" }, { name: "andy" }] },
  {
    id: 3,
    name: "zerocool",
    members: [{ name: "andy", domain: "IAM" }, { name: "jorge" }],
  },
];
const getTeams = () => {
  return teams;
};
const getTeam = (id) => {
  const team = teams.find((team) => team.id === id);
  return team;
};
const updateTeam = (id, payload) => {
  return "patch team";
};
const deleteTeam = (id) => {
  return "delete team";
};
module.exports = {
  getTeams,
  getTeam,
  updateTeam,
  deleteTeam,
};
