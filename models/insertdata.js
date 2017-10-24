const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Letters');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('connected to the db...');
})

const letterSchema = mongoose.Schema({
  id: Number,
  name: String
});

const Letter = mongoose.model('Letters', letterSchema);

//const addLetter = new Letter({id: 2, name: "b"})

function add(str) {
  addLetter.save((err, letter) => {
    if (err) return console.log(err);
  });
}

function retrieveAll() {
  Letter.find((err, letter) => {
    console.log(letter)
  });

}