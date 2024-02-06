const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://satyaat:bootcamp@92@cluster0.oawpbse.mongodb.net/Mern-book-search?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    
  }
);

module.exports = mongoose.connection;