const express = require('express');
const router = express.Router();


router.get('/:table', (req, res) => {});
router.get('/:table/:id', (req, res) => {});
router.post('/:table/', (req, res) => {});
router.patch('/:table/:id', (req, res) => {});
router.delete('/:table/', (req, res) => {});
router.delete('/:table/:id', (req, res) => {});

module.exports = router;