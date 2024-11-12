const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types: {ObjectId} } = Schema;
const commnetSchema = new Schema({
    commmnter: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },
    commnet: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Commnet', commnetSchema);