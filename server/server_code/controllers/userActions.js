var connection = require('./userProfileSchema');

exports.userRegistration = function(req,res) {
    var User = new connection({
        username : req.body.username,
        email : req.body.email,
        password : req.body.password,
        name : req.body.name,
        dateofbirth : req.body.dateofbirth,
        mobile : req.body.mobile,
        gender : req.body.gender,
        occupation : req.body.occupation,
        weddingdate : req.body.weddingdate
    });
    connection.find({ $or: [{ username: req.body.username }, { email: req.body.email }] }, function(err, docs) {
        if(err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        } else if(docs.length) {
            if(docs[0].username == req.body.username) {
                res.status(201).json({
                    data: 'Username already exists, try with another username',
                    status: 1
                });
            } else if(docs[0].email == req.body.email) {
                res.status(201).json({
                    data: 'Email already exists',
                    status: 2
                });
            }
        } else {
            User.save(function(err, data) {
                if(err)  {
                    return res.status(500).json({
                        title: 'An error occured',
                        error: err
                    });
                } else {
                    return res.status(200).json({
                        data: 'User Successfully registered',
                        status: 3,
                        docs: data
                    });
                }
            });
        }
    });
}

exports.login = function(req,res) {
    connection.find({ $or: [ {username:req.body.username}, {email: req.body.email} ]}, function(err, docs) {
        if(err) {
            res.status(500).json({
                title: 'An error occurred',
                err: error
            });
        } else if(docs.length) {
            if(docs[0].password == req.body.password) {
                return res.status(200).json({
                    title: 'User Logged in Successfully',
                    code: 1,
                    data: docs
                });
            } else {
                return res.status(201).json({
                    title: 'Password wrong',
                    code: 2
                });
            }
        } else {
            return res.status(201).json({
                title: 'Username or Email ID is wrong',
                code: 3
            });
        }
    });
}