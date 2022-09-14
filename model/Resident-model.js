import mongoose from "mongoose";

import Address from "./Address-model.js";

const residentSchema = new mongoose.Schema({
    name: {
        lastName: {
            type: String,
            required: true,
            max: 255,
        },
        firstName: {
            type: String,
            required: true,
            max: 255,
        },
        middleName: {
            type: String,
            max: 255,
        },
    },
    addressId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Address',
    },
    sex: {
        type: String,
        required: true,
        max: 255,
    },
    civilStatus: {
        type: String,
        required: true,
        max: 255,
    },
    religion: {
        type: String,
        required: true,
        max: 255,
    },
    precintNumber: {
        type: String,
        max: 255,
    },
    birthdate: {
        type: Date,
        required: true,
        max: 255,
    },
    birthplace: {
        type: String,
        required: true,
        max: 255,
    },
    profession: {
        type: String,
        required: true,
        max: 255,
    },
    nationality: {
        type: String,
        required: true,
        max: 255,
    },
    residentType: {                                 // Permanent, Business Owner, Temporary
        type: String,
        required: true,
        max: 255,
    },
    blacklist: {
        isBlacklisted: Boolean,                 // If true, add details. if false disable details
        details: String,
    },
})

const Resident = mongoose.model('Resident', residentSchema)

export default Resident