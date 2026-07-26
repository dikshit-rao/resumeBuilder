const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    resumeData: {
        type: mongoose.Schema.Types.Mixed,
        default: {}
    },
    name:{
        type:String,
        required: true,
    },
    template:{
        type:Number,
        required: true,
    }
},{timestamps:true});

module.exports = mongoose.model('Resume', ResumeSchema);