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

router.post('/', async (req, res) => {
  try {
    console.log('post triggered with data : ', req.body);

    const { Constant, Humidity, Temprature, Smoke, Fire, Sound, Inches, Cm } =
      req.body;

    let info = await Data.findOne({ Constant });
    if (info) {
      // MONGO DB DATA INPUT HERE
      const info = new Data({
        Humidity,
        Temprature,
        Smoke,
        Fire,
        Sound,
        Inches,
        Cm,
      });
      await info.save();
    }
    return res.status(200).json({
      success: true,
      message: 'Info Saved',
      data: info,
    });
  } catch (err) {
    console.log(err);
    return res.status(503).json(err);
  }
});

module.exports = router;
