const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool')

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    console.log('Gallery Item', galleryItems)
    for (const galleryItem of galleryItems) {
        if (galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    let sqlText = 'SELECT * FROM gallery'
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
            console.log('This is what we are GETTING from the db', result.rows)
        })
        .catch((err) => {
            console.log('Error in router GET', err)
            res.sendStatus(500);
        })
}); // END GET Route

module.exports = router;