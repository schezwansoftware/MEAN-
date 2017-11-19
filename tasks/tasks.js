var express=require('express');
var router=express.Router();


router.get('/tasks',function(req,res,next) {
	// body...
	res.send('Tasks Page');
});

module.exports=router;