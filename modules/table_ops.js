const express = require('express');
const router = express.Router();

var db = require('../utils/database');



router.get('/:table', (req, res) => {
    db.query(`SELECT * FROM ${req.params.table}`, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching data');
        } else {
            res.json(results);
        }
    });
});
router.get('/:table/:id', (req, res) => {});
router.post('/:table/', (req, res) => {});
router.patch('/:table/:id', (req, res) => {});
router.delete('/:table/', (req, res) => {});
router.delete('/:table/:id', (req, res) => {});

module.exports = router;