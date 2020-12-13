const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET
router.get('/', (req, res) => {
    console.log('GET /history');
    pool.query('SELECT * from feedback ORDER BY date DESC;').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /feedback', error)
        res.sendStatus(500);
    });
})//END GET

//POST
router.post('/', (req, res) => {
    console.log('POST /history');
    let newFeedback = req.body;
  console.log('here is our newFeedback:', newFeedback);

  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
  VALUES ($1, $2, $3, $4);`;

    pool.query(queryText, [newFeedback.feelingReducer.feeling, newFeedback.understandingReducer.understanding, 
                            newFeedback.supportReducer.support, newFeedback.commentsReducer.comments
                            ]).then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        //console.log('Error GET /api/pizza', error)
        res.sendStatus(500);
    });
})//END POST

//DELETE
router.delete('/:id', (req, res) => {
    console.log('DEL in process');
    pool.query('DELETE FROM feedback WHERE id=$1', [req.params.id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error with DELETE', error);
        res.sendStatus(500);
    })
})//END DELETE

module.exports = router;