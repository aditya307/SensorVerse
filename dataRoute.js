const express = require('express');
const Data = require('./Data');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
      const data = await Data.find();
      console.log(data);
      return res.status(200).json({
        success: true,
        count: data.length,
        data: data,
      });
    } catch (err) {
      console.log(err);
      return res.status(404).json(err);
    }
  });
module.exports = router;