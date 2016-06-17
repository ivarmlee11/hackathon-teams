var express = require('express');
var teamService = require('../models/teamService');
var router = express.Router();

// Get teams/
router.get('/', function(req, res) {
  var teams = teamService.allTeams();
  res.render('teams/index', { teams: teams });
});

// Post teams/
router.post('/', function(req, res) {
  teamService.addTeam(req.body);
  res.redirect('/teams');
});

// Get teams/new
router.get('/new', function(req, res) {
  res.render('teams/new');
});

// Get teams/:name
router.get('/:name', function(req, res) {
  // search for the team name in all the teams.
  var team = teamService.getTeam(req.params.name);
  res.render('teams/show', { team: team });
});

// Delete teams/:name
router.delete('/:name', function(req, res) {
  teamService.deleteTeam(req.params.name);
  res.send({ msg: 'deleted'});
});

// Get teams/:name/edit
router.get('/:name/edit', function(req, res) {
  var teamToEdit = teamService.getTeam(req.params.name);
  res.render('teams/edit.ejs', { team : teamToEdit });
});

// Put /teams/:name
router.put('/:name', function(req, res) {
  teamService.editTeam(req.params.name, req.body);
  res.send({ msg: 'edited! '});
});

module.exports = router;
