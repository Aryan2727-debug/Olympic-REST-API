const express = require("express");
const MensRanking = require("../models/mens");

const router = new express.Router();

router.post("/mens" , async (req,res) => {

    try{
        console.log(req.body);

        const user = new MensRanking(req.body);

        const createUser = await user.save();

        res.status(201).send(createUser);
    }catch(err){
        res.status(400).send(err);
    };
});

router.get("/mens" , async (req,res) => {

    try{
       const result = await MensRanking.find();
       res.send(result);
    }catch(err){
        res.send(err);
    };
});


module.exports = router;