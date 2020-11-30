const db = require('../models')

module.exports ={
    signUp(){(req, res)=>{
        return db.User.create({
            username: req.username,
            email: req.email,
            password: req.password
        }).then(()=>{
            res.redirect(307, '/api/login')
        })
    }
    },
    login(req, res){
        if(req.user){
            res.end()
        }
    },
    logout(req,res){
        res.logout()
        res.redirect('/')
    }
}