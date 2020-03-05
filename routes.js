var express = require('express'),
router = express.Router(),
itemCtrl = require('./item-controller');

app.get('/hello/:foo/:bar', itemCtrl.getWorld)


app.post('/hello', function(req,res){
    res.json({result: "The POST request was sent", data: req.body});

});

module.exports = router;