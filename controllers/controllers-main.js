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
    res.render('mainContent/mainSearch.ejs');
});

//New route to connect jQuery
router.get('/mainContent/mozaic', (req,res) => {
    Items.find({}, (err, items) => {
        if (err) {
            res.send(err)
        } else {
            console.log('Main search page - check!')
            res.send(items);
        }
    });
})
//New
router.get('/mainContent/mainNew', (req,res) => {
    console.log('Add new content page - check!')
    res.render('mainContent/mainNew.ejs');
})

//Show Detail
router.get('/mainContent/mainDetail/:id', (req,res) => {
    Items.findById(req.params.id, (err, entry) => {
        console.log("This is the full entry", entry)
        res.render('mainContent/mainDetail.ejs', {
            thisEntry: entry
        })
    });
});

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
router.delete('/mainContent/mainSearch/:id', (req,res) => {
    Items.findByIdAndRemove(req.params.id, (err, deletedEntry) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/HP_Encyclopedia/mainContent/mainSearch')
        }
    });
});

//Edit
router.get('/mainContent/mainEdit/:id', (req,res) => {
    Items.findById(req.params.id, (err, entry) => {
        if (err) {
            console.log(err)
        } else {
            res.render('mainContent/mainEdit.ejs', {
                findEntry: entry
            });
        }
    });
});

router.put('/mainContent/mainEdit/:id', (req,res) => {
    Items.findByIdAndupdate(req.params.id, req.body, { new: true }, (err, updatedEntry) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/HP_Encyclopedia/mainContent/mainSearch');
        }
    })
});

module.exports = router