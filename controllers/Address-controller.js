import mongoose from "mongoose";

import Address from "../model/Address-model.js";

// Get Single Address
export async function getSingleAddress(req, res) {
    const id = req.params.id

    try {
        const address = await Address.findById(id)
        return res.status(200).json(address)
    } catch (err) {
        return res.status(404).json({ message: err.message })
    }
};

// Get Address
export async function getAddress(req, res) {
    try {
        const address = await Address.find()
        return res.status(200).json(address)
    } catch (err) {
        return res.status(404).json({ message: err.message })
    }
};

// Add Address
export async function addAddress(req, res) {
    const address = new Address({
        householdNumber: req.body.householdNumber,
        streetname: req.body.streetname,
        buildingtype: req.body.buildingtype,
        buildingOwner: req.body.owner,                              // CHECK THIS
        buildingMember: req.body.members,                           // CHECK THIS
    })

    try {
        await address.save()
        return res.status(200).send({ message: 'Successfully added' })
    } catch (error) {
        return res.status(400).send({ message: error.message })
    }
}

// Update Address
export async function updateAddress(req, res) {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with that ID: ${id}`)

    const updateAddress = {
        householdNumber: req.body.householdNumber,
        streetname: req.body.streetname,
        buildingtype: req.body.buildingtype,
        buildingOwner: req.body.owner,                              // CHECK THIS
        buildingMember: req.body.members,                           // CHECK THIS
    }

    try {
        await Address.findByIdAndUpdate(id, updateAddress, { new: true })
        return res.status(201).json(updateAddress)
    } catch (err) {
        return res.status(404).json({ message: err.message })
    }
};

// Delete Address
export async function removeAddress(req, res) {
    const id = req.params.id

    try {
        await Address.findByIdAndDelete(id)
        return res.status(200).send({ "message": "Successfully deleted" })
    } catch (err) {
        return res.status(404).json({ message: err.message })
    };
};