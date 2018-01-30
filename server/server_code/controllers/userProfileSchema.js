var mongoose = require('mongoose');
mongoose.connect('mongodb://vj_new:vj_new@ds161316.mlab.com:61316/vj_new');

// mongoose.connection.on('connected', function() {
//     console.log('Database connected successfully ' +db );
// });

// mongoose.connection.on('error', function(err) {
//   console.log('Database not connected ' +err);
// });