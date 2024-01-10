const express = require("express");
const router = express();


const ctrlClinics = require("../controllers/clinics");

router.get("/", ctrlClinics.homelist);

module.exports = router;
