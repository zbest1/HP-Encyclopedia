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
            res.redirect('/HP_Encyclopedia/mainSearch')
        }
    });
})

//Landing
router.get('/', (req,res) => {
    console.log("landing page - check!")
    res.render('mainContent/landing.ejs');
})

// //Index
// router.get('/mainSearch', (req,res) => {
//     Items.find({}, (err, items) => {
//         if (err) {
//             res.send(err)
//         } else {
//             console.log('These items')
//             res.render('mainSearch.ejs', {
//                 allItems: items
//             })
//         }
//     })
// })


//New


//Show


//Create 



//Delete


//Edit

module.exports = router