const express = require("express");
const adsController = require("../controller/adsController");
const router = express.Router();
router.get("/advertiseAdoption", adsController.getadvertiseAdoption);
router.get("/advertiseAdoption/:_id", adsController.getadvertiseAdoptionById);
router.post("/postadvertiseAdoption", adsController.postadvertiseAdoption);
router.post("/advertiseDemandPet", adsController.postAdvertiseDemandPet);
router.delete("/deleteAddAdoption/:index", adsController.deleteAddAdoption);

module.exports = router;
