const router = require("express").Router();
const { QuotesController } = require("../controllers");


router.get('/quotes', QuotesController.index);

router.get('/quotes/all', QuotesController.get);

module.exports = router;