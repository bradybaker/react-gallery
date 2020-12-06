const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool')

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    const galleryId = req.params.id;
    let sqlText = `UPDATE gallery SET likes = likes + 1 WHERE id = $1`
    pool.query(sqlText, [galleryId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch(err => {
            console.log('Error in router PUT', err)
            res.sendStatus(500)
        })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    let sqlText = 'SELECT * FROM gallery ORDER BY id'
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('Error in router GET', err)
            res.sendStatus(500);
        })
}); // END GET Route

router.post('/', (req, res) => {
    const newImage = req.body
    let sqlText = `INSERT INTO gallery (path, description) VALUES ($1, $2);`
    pool.query(sqlText, [newImage.path, newImage.description])
        .then((result) => {
            res.sendStatus(201)
        })
        .catch((err) => {
            console.log('Error in router POST', err)
        })
})

router.delete('/delete/:id', (req, res) => {
    const galleryId = req.params.id
    let sqlText = 'DELETE FROM gallery WHERE id=$1;'
    pool.query(sqlText, [galleryId])
        .then((response) => {
            res.sendStatus(200)
        })
        .catch(err => {
            console.log('Error in route delete', err)
            res.sendStatus(500)
        })
})

module.exports = router;