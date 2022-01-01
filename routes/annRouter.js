const express = require('express');
const annController = require('../controller/annController');
const router = express.Router();

// get All announced pet as lost
router.get('/announcedLost',annController.getannouncedLost) 
// get lost pet by id 
router.get('/announcedLost/:_id',annController.getannouncedLostById)
// Post Announcement of pet lost
router.post('/postPetLost',annController.postPetLost);
// delete an announcement of pet lost
router.delete('/deleteAnnouncement/:index',annController.deleteAnnouncement); 
module.exports = router;