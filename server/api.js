var express = require("express"),
    gitHubCtrl = require("./controllers/githubLimit.ctrl.js"),
    usersCtrl = require("./controllers/users.ctrl.js"),
    router = express.Router();

router.use('/githublimit', gitHubCtrl);
router.use('/users', usersCtrl);

module.exports = router;