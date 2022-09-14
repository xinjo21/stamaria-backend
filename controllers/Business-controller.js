import mongoose from "mongoose";

import Business from "../model/Business-model.js";

// Get Single business
export async function getSingleBusiness(req, res) {
    const id = req.params.id

    try {
        const business = await Business.findById(id)
        return res.status(200).json(business)
    } catch (err) {
        return res.status(404).json({ message: err.message })
    }
};

// Get business
export async function getBusiness(req, res) {
    try {
        const business = await Business.find()
        return res.status(200).json(business)
    } catch (err) {
        return res.status(404).json({ message: err.message })
    }
};

// Add business
export async function addBusiness(req, res) {
    const business = new Business({
        businessName: req.body.businessName,
        addressId: req.body.addressId,
        businessType: req.body.businessType,
        permit: req.body.permit,                              
        businessOwnerId: req.body.businessOwnerId,                          
    })

    try {
        await business.save()
        return res.status(200).send({ message: 'Successfully added' })
    } catch (error) {
        return res.status(400).send({ message: error.message })
    }
}

// Update business
export async function updateBusiness(req, res) {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with that ID: ${id}`)

    const updateBusiness = {
        businessName: req.body.businessName,
        addressId: req.body.addressId,
        businessType: req.body.businessType,
        permit: req.body.permit,                              
        businessOwnerId: req.body.businessOwnerId,       
    }

    try {
        await Business.findByIdAndUpdate(id, updateBusiness, { new: true })
        return res.status(201).json(updateBusiness)
    } catch (err) {
        return res.status(404).json({ message: err.message })
    }
};

// Delete business
export async function removeBusiness(req, res) {
    const id = req.params.id

    try {
        await Business.findByIdAndDelete(id)
        return res.status(200).send({ "message": "Successfully deleted" })
    } catch (err) {
        return res.status(404).json({ message: err.message })
    };
};