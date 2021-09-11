// const express = require('express');
// const Data = require('./Data');
// const router = express.Router();

// router.get('/', async (req, res) => {
//   try {
//     const data = await Data.find();
//     console.log(data);
//     return res.status(200).json({
//       success: true,
//       count: data.length,
//       data: data,
//     });
//   } catch (err) {
//     console.log(err);
//     return res.status(404).json(err);
//   }
// });

// router.post('/', async (req, res) => {
//   //   try {
//   // const { info } = req.body;
//   // //     // const data = new Data({
//   // //     //   info,
//   // //     // });
//   // //     // await data.save();
//   // //     var info = req.body.data;
//   // //     await info.save();
//   // //     console.log(info);
//   // //     console.log('dfafasfasfd');
//   // //   } catch (error) {
//   // //     return res.status(400).json(error);
//   // //   }
//   // const data = new Data({
//   //   info,
//   // });
//   // data.save();
//   try {
//     const data = await Data.find();
//     // console.log(data);
//     console.log('Data will be printed HERERERERERERERERERerr');
//     // console.log(req.body);
//     console.log(req);
//     return res.status(200).json({
//       success: true,
//     });
//   } catch (err) {
//     console.log(err);
//     return res.status(404).json(err);
//   }
// });

// module.exports = router;

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
    const sensor1 = req.body.Humidity;
    const sensor2 = req.body.Temprature;
    const sensor3 = req.body.Smoke;
    const sensor4 = req.body.Fire;
    const sensor5 = req.body.Sound;
    const sensor6 = req.body.Inches;
    const sensor7 = req.body.Cm;

    // MONGO DB DATA INPUT HERE

    return res.status(200).json({
      success: true,
      message: 'Data received from nodemcu!',
      data: {
        sensor1,
        sensor2,
        sensor3,
        sensor4,
        sensor5,
        sensor6,
        sensor7,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(503).json(err);
  }
});

module.exports = router;
