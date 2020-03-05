exports.getWorld = function(req,res){
    res.json({result: "Hello World!", data: [

    req.params.foo,
    req.params.bar

]});

}
exports.getWorld = function(req,res){
    res.json({result: "the POST request was sent", data: req.body});

}