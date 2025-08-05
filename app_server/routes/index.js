const express = require('express');
const router = express.Router();
const ctrlMain = require('/controllers/');
/* GET homepage. */
router.get('/' ,ctrlMain.index);
module.exports = router;
