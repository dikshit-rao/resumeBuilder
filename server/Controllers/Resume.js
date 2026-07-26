const Resume = require("../Models/Resume");

const addResume = async (req, res) => {
    try {
        const userId = req.user.id;
        const { template,resume,filename } = req.body;

        if (!resume) {
            return res.status(400).json({ success: false, message: "Resume data is required" });
        }

        const newResume = new Resume({ userId, resumeData: resume,name:filename,template:template });
        await newResume.save();

        res.status(200).json({ success: true, message: "Resume added successfully", resume: newResume });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};

const updateResumeName = async (req, res) => {
    try {
        const userId = req.user.id;
        const { resumeId, newName } = req.body;

        if (!resumeId || !newName) {
            return res.status(400).json({ success: false, message: "Resume ID and new name are required" });
        }
        const resume = await Resume.findOne({ _id: resumeId, userId });

        if (!resume) {
            return res.status(404).json({ success: false, message: "Resume not found" });
        }
        resume.name = newName;
        
        await resume.save();
        res.status(200).json({ success: true, message: "Resume name updated successfully", resume });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};

const deleteResume = async (req, res) => {
    try {
        const userId = req.user.id;
        const { resumeId } = req.body;

        if (!resumeId) {
            return res.status(400).json({ success: false, message: "Resume ID is required" });
        }

        const deletedResume = await Resume.findOneAndDelete({ _id: resumeId, userId });

        if (!deletedResume) {
            return res.status(404).json({ success: false, message: "Resume not found" });
        }

        res.status(200).json({ success: true, message: "Resume deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};

const getAllResumes = async (req, res) => {
    try {
        const userId = req.user.id;
        const resumes = await Resume.find({ userId });

        // if (!resumes.length) {
        //     return res.status(404).json({ success: false, message: "No resumes found" });
        // }

        res.status(200).json({ success: true, message: "Resumes fetched successfully", resumes });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};

module.exports = { addResume, deleteResume, getAllResumes ,updateResumeName };
