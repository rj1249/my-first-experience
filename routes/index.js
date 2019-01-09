var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});
router.post('/', function(req, res, next){
 //var a=req.body.txt1;
 //var b=req.body.txt2;
 //console.log("text box value is "+a+b);
 const myarray={
   name:req.body.txt1,
   age:req.body.txt2,

 }
 res.render('result', { raj: myarray })
 }
 );
 

module.exports = router;
