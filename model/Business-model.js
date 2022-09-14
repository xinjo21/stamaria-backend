import mongoose from 'mongoose'

import Address from './Address-model.js';
import Resident from './Resident-model.js';

const businessSchema  = mongoose.Schema({
    businessName: {
        type: String,
        required: true,
        max: 255,
    },
    addressId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Address",
    },
    businessType: {
        type: String,
        required: true,
        max: 255,
    },
    permit: {
        type: String,
        required: true,
        max: 255,
    },
    businessOwnerId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Resident",
    }
})

const Business = mongoose.model('Business', businessSchema)

export default Business;