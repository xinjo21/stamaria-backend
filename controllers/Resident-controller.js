import mongoose from "mongoose";

import Resident from "../model/Resident-model.js";

// Get Single resident
export async function getSingleResident(req, res) {
    const id = req.params.id

    try {
        const resident = await Resident.findById(id)
        return res.status(200).json(resident)
    } catch (err) {
        return res.status(404).json({ message: err.message })
    }
};

// Get resident
export async function getResident(req, res) {
    try {
        const resident = await Resident.find()
        return res.status(200).json(resident)
    } catch (err) {
        return res.status(404).json({ message: err.message })
    }
};

// Add resident
export async function addResident(req, res) {
    const resident = new Resident({
        name: {
            lastName: req.body.lastName,
            firstName: req.body.firstName,
            middleName: req.body.middleName,
        },     
        addressId: req.body.addressId,
        sex: req.body.sex,
        civilStatus: req.body.civilStatus,
        religion: req.body.religion,
        precintNumber: req.body.precintNumber,
        birthdate: req.body.birthdate,
        birthplace: req.body.birthplace,
        profession: req.body.profession,
        nationality: req.body.nationality,
        residentType: req.body.precintNumber,
        blacklist: {
            isBlacklisted: req.body.isBlacklisted,
            details: req.body.blacklistDetails,
        }
    })

    try {
        await resident.save()
        return res.status(200).send({ message: 'Successfully added' })
    } catch (error) {
        return res.status(400).send({ message: error.message })
    }
}

// Update resident
export async function updateResident(req, res) {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with that ID: ${id}`)

    const updateResident = {
        name: {
            lastName: req.body.lastName,
            firstName: req.body.firstName,
            middleName: req.body.middleName,
        },     
        addressId: req.body.addressId,
        sex: req.body.sex,
        civilStatus: req.body.civilStatus,
        religion: req.body.religion,
        precintNumber: req.body.precintNumber,
        birthdate: req.body.birthdate,
        birthplace: req.body.birthplace,
        profession: req.body.profession,
        nationality: req.body.nationality,
        residentType: req.body.precintNumber,
        blacklist: {
            isBlacklisted: req.body.isBlacklisted,
            details: req.body.blacklistDetails,
        }
    }

    try {
        await Resident.findByIdAndUpdate(id, updateResident, { new: true })
        return res.status(201).json(updateResident)
    } catch (err) {
        return res.status(404).json({ message: err.message })
    }
};

// Delete resident
export async function removeResident(req, res) {
    const id = req.params.id

    try {
        await Resident.findByIdAndDelete(id)
        return res.status(200).send({ "message": "Successfully deleted" })
    } catch (err) {
        return res.status(404).json({ message: err.message })
    };
};