var express=require('express');
var router=express.Router();


router.get('/',function(req,res,next) {
	// body...
	res.render('index.html');
});

module.exports=router;