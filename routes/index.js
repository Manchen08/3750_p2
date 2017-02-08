var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/test');

var Schema = mongoose.Schema;

var userDataSchema = new Schema({
  name: {type: String, required: true},
  email: String
}, {collection: 'user-data'}); // overwrite the default of pluralizing UserData

var UserData = mongoose.model('UserData', userDataSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/get-data', function(req,res,next){
  UserData.find()
  .then(function(doc){
    res.render('index', {items: doc});
  });
});

router.post('/insert', function(req,res,next){
  var user = {
    name: req.body.name,
    email: req.body.email
  };

  var data = new UserData(user);
  data.save();
  res.redirect('/');
});

router.post('/update', function(req,res,next){
  var id = req.body.id;

  UserData.findById(id, function(err, doc){
    if (err){
      console.error('error, no entry found');
    }
    doc.title = req.body.title;
    doc.content = req.body.content;
    doc.author = req.body.author;
    doc.save();
  })
  res.redirect('/');
});

router.post('/delete', function(req,res,next){
  var id = req.body.id;
  UserData.findByIdAndRemove(id).exec();
  res.redirect('/');
})
module.exports = router;
