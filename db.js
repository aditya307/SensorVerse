const mongoose = require('mongoose');
const connectDB = () => {
  mongoose
    .connect(
      'mongodb+srv://adi:adi@cluster0.nzm50.mongodb.net/nodedata?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log('db connected'))
    .catch((err) => console.log(err));
};
module.exports = connectDB;
