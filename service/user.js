exports.login = function(req, res){
    var message = '';


    if(req.method == "POST"){
        var post  = req.body;
        var login= post.login;
        var password= post.password;

        var sql="SELECT id, full_name, created_at, country_code, ordersid, freelancersid, login FROM `users` WHERE `login`='"+login+"' and password = '"+password+"'";
        db.query(sql, function(err, results){
            if (err) throw err;
            if(results.length){
                req.session.userId = results[0].id;
                req.session.user = results[0];
                console.log(results[0].id);
                res.send(`${req.session.userId}`,);
            }
            else{
                message = 'Wrong Credentials.';
                res.send(message);
            }

        });
    } else {
        res.send(message);
    }
};


exports.logout = function(req, res){


    req.session.destroy(function(err) {

    })
    res.redirect('/login');
};