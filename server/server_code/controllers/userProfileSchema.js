var mongoose = require('mongoose');
mongoose.connect('mongodb://vj_new:vj_new@ds161316.mlab.com:61316/vj_new');

// mongoose.connection.on('connected', function() {
//     console.log('Database connected successfully ' +db );
// });

// mongoose.connection.on('error', function(err) {
//   console.log('Database not connected ' +err);
// });

var userRegister = mongoose.Schema({
    username:  { type:String, required: true, unique: true },
    email:  { type:String, required: true, unique: true },
    password:  { type:String, required: true },
    dateofbirth:  { type:String, required: true },
    name:  { type:String, required: true },
    mobile:  { type:Number, required: true },
    gender:  { type:String, required: true },
    occupation:  { type:String },
    weddingdate:  { type:String }
});

var user = mongoose.model("vj_new_dbs", userRegister);

module.exports = user;