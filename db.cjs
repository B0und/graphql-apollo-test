module.exports = {
  tribes: [
    { id: 1, title: "tribe1" },
    { id: 2, title: "tribe2" },
  ],
  teams: [
    { id: 11, title: "team1", tribe_id: 1 },
    { id: 22, title: "team2", tribe_id: 1 },
    { id: 33, title: "team3", tribe_id: 2 },
    { id: 44, title: "team4", tribe_id: 2 },
  ],
  sprints: [
    { id: 111, title: "Team1-Sprint1", team_id: 11 },
    { id: 222, title: "Team1-Sprint2", team_id: 11 },

    { id: 333, title: "Team2-Sprint11", team_id: 22 },
    { id: 444, title: "Team2-Sprint22", team_id: 22 },

    { id: 555, title: "Team3-Sprint333", team_id: 33 },
    { id: 666, title: "Team3-Sprint444", team_id: 33 },

    { id: 777, title: "Team4-Sprint555", team_id: 44 },
    { id: 888, title: "Team4-Sprint666", team_id: 44 },
  ],
};
