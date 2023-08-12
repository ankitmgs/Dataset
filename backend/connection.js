const mongoose = require('mongoose');
const db='dataSet';
const dbUrl = `mongodb+srv://ankitmgs:987654321@cluster0.6o3q9.mongodb.net/Dataset?retryWrites=true&w=majority`;

// making Connection
mongoose.connect(dbUrl)
.then((result) => {
    console.log('DataBase Connected');      
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;