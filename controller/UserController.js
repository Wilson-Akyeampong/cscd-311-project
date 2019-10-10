const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = mongoose.model('User');


exports.register = async (req, res) => {
    const { id, pin, name, gender, level } = req.body;
    //check if id exists
    try {
        const user = await User.findOne({id});
        if(user){
            return res.render('register',{
                error: "User already exists"
            });
        }
        const newUser = new User(req.body);
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.pin, salt, (err, hash) => {
                newUser.pin = hash;
                newUser.save((err, student) =>{
                    res.render('index');
                });
            })
        })
    } catch (error) {
       console.log(error); 
    }
    
}

exports.login = async (req, res) => {
    const { pin, id } = req.body;
    try {
        const user = await User.findOne({id});
        if(user){
            bcrypt.compare(pin, user.pin, (err, isMatch) => {
                if(isMatch){
                   return res.render('index')
                }
                return res.render('login',{
                    error:"Credentials Wrong !"
                })
            })
        }
    } catch (error) {
        
    }
};

exports.registerPage = (req, res) => {
    res.render('register');
}
exports.loginPage = (req, res) => {
    res.render('login');
}