const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://socialNetworkAPI:Howkey%402011@tpcbr-4-project.ou5hsth.mongodb.net/book_search_db_2?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    
  }
);

module.exports = mongoose.connection;