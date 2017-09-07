var express = require("express"),
    gitHubCtrl = require("/../controllers/githubLimit.ctrl.js"),
    router = express.Router();

router.use('/githublimit', gitHubCtrl);

module.exports = router;