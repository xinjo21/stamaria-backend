import mongoose from 'mongoose'

import Resident from './Resident-model.js'

const addressSchema = new mongoose.Schema({
    householdNumber: {
        type: String,
        required: true,
        max: 255,
    },
    streetName: {
        type: String,
        required: true,
        max: 255,
    },
    buildingType: {        // APARTMENT, COMMERCIAL, HOUSE
        type: String,
        required: true,
        max: 255,
    },
    buildingOwner: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Resident",
    },
    buildingMembers: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Resident",
        }
    ]
})

const Address = mongoose.model('Address', addressSchema)

export default Address;