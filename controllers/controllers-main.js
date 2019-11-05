const express = require('express');
const router = express.Router();

const Items = require('../models/mainSchema.js');
const data = require('../models/entryData.js')


//ROUTES

//Seed the Database
router.get('/entryData', (req,res) => {
    Items.create(data, (err, newData) => {
        if (err) {
            res.send(err)
        } else {
            res.redirect('/HP_Encyclopedia/mainContent/mainSearch')
        }
    });
})

//Landing page
router.get('/', (req,res) => {
    console.log("landing page - check!")
    res.render('mainContent/landing.ejs');
})

//Index / mainSearch page
router.get('/mainContent/mainSearch', (req,res) => {
    Items.find({}, (err, items) => {
        if (err) {
            res.send(err)
        } else {
            console.log('Main search page - check!')
            res.render('mainContent/mainSearch.ejs', {
                allEntries: items
            })
        }
    })
})

//New
router.get('/mainContent/mainNew', (req,res) => {
    res.render('mainContent/mainNew.ejs');
})

//Show


//Create 
router.post('/mainContent/mainSearch', (req,res) => {
    Items.create(req.body, (err, newEntry) => {
        if (err) {
            res.send(err)
        } else {
            console.log('New items')
        res.redirect('/HP_Encyclopedia/mainContent/mainSearch')
        }
    });
});


//Delete


//Edit

module.exports = router