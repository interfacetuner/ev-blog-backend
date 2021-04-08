const mongoose = require('mongoose');
const db = mongoose.connection;

// connected
mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

// connect to mongoDB
db.on('connected', function () {
  console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});
