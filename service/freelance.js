exports.getall = function(req, res){
    var message = '';

    if(req.method == "GET"){
        Freelance.findOne().then(function (freelance) {
            res.send(freelance,);
        });
    }
};