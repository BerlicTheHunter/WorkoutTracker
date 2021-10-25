//* ----- Required Modules and Files ----- *\\
const router = require('express').Router();
const path = require('path');
const apiRoutes = require(path.join(__dirname, '/api/api.js'));

//* ----- Route to api folder ----- *\\
router.use('/api', apiRoutes);

//* ----- View Routes -----*\\
router.get('/', (req, res) =>
res.sendFile(path.join(__dirname, '../public/index.html'))
);

router.get('/stats', (req, res) =>
res.sendFile(path.join(__dirname, '../public/stats.html'))
);

router.get('/exercise', (req, res) =>
res.sendFile(path.join(__dirname, '../public/exercise.html'))
);

//* -----Export Routes ----- *\\
module.exports = router;