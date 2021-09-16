const express = require('express');
const Data = require('./Data');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await Data.find();
    console.log(data);
    return res.sendFile(path.join(__dirname + '/index.html')); 
  } catch (err) {
    console.log(err);
    return res.status(404).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    console.log('post triggered with data : ', req.body);

    const { Humidity, Temprature, Smoke, Fire, Sound, Inches, Cm } = req.body;

    const allObjects = await Data.find();
    const obj = allObjects[0];

    if (obj) {
      (obj['Humidity'] = Humidity),
        (obj['Temprature'] = Temprature),
        (obj['Smoke'] = Smoke),
        (obj['Fire'] = Fire),
        (obj['Sound'] = Sound),
        (obj['Inches'] = Inches),
        (obj['Cm'] = Cm);

      await obj.save();
    } else {
      const obj = new Data({
        Humidity,
        Temprature,
        Smoke,
        Fire,
        Sound,
        Inches,
        Cm,
      });
      await obj.save();
    }

    return res.status(200).json({
      success: true,
      message: 'Info Saved',
      data: obj,
    });
  } catch (err) {
    console.log(err);
    return res.status(503).json(err);
  }
});

module.exports = router;
