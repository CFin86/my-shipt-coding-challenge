var express = require("express"),
    gitHubCtrl = require("../controllers/githublimit.ctrl.js"),
    router = express.Router();

router.use('/githublimit', gitHubCtrl);

module.exports = router;