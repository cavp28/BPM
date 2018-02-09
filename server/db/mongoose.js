var mongoose = require('mongoose');

const REMOTE_MONGO = 'mongodb://fabrilo:fabriloUser123@ds229918.mlab.com:29918/bpmapp';
const LOCAL_MONGO = 'mongodb://localhost:27017/BPMapp';
const MONGO_URI = process.env.PORT ? REMOTE_MONGO : LOCAL_MONGO;

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI).then(() => {
    console.log('Connected to Mongo instance.')
}, (err) => {
    console.log('Error connecting to Mongo instance: ', err);
});

module.exports = {mongoose}
