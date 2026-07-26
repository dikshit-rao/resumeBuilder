const express = require("express")
const router = express.Router()
const { addResume, deleteResume, getAllResumes,updateResumeName } = require('../Controllers/Resume')
const {auth} = require('../Middlewares/auth')

router.post('/addresume',auth,addResume);
router.post('/deleteresume',auth,deleteResume);
router.post('/getallresume',auth,getAllResumes);
router.post('/changeresumename',auth,updateResumeName);
module.exports = router;