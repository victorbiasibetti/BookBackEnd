const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://victor:victor123@clusteraktienow-4mrhs.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise

module.exports = mongoose;