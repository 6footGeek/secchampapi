const challenges = [
  { id: 1, name: "challenge 1" },
  { id: 2, name: "challenge 2" },
  { id: 3, name: "challenge 3" },
  { id: 4, name: "challenge 4" },
  { id: 5, name: "challenge 5" },
];

const getChallenges = () => {
  return challenges;
};
const getChallenge = (id) => {
  const challenge = challenges.find((challenge) => challenge.id === id);
  return challenge;
};
const updateChallenge = (id, payload) => {
  return "patch Challenge";
};
const deleteChallenge = (id) => {
  return "delete Challenge";
};

module.exports = {
  getChallenges,
  getChallenge,
  updateChallenge,
  deleteChallenge,
};
