const express = require('express');
const router = express.Router();

const Items = require('../models/mainSchema.js');
const data = require('../models/entryData.js')


//ROUTES

//Landing

router.get('/', (req,res) => {
    res.send("Landing Page - Check!")
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