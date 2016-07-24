'use strict';
var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Guid = require('guid'),
    bodyParser = require('body-parser'),
    Flashcard = require('../models/flashcard.model.js');



router.get('/getDecks/', function (req, res) {
    Flashcard.find(function (err, flashcard) {
        if (!err) {
            res.send(flashcard)
        } else {
            res.send(err)
        }
        res.end();
    })
});


router.get('/getDeck/:id', function (req, res) {
    var id = req.params.id;
    Flashcard.findOne({ _id: id }, function (err, foundObj) {
        if (err) {
            console.log(err)
            res.status(500).send();
        } else {
            if (!foundObj) {
                res.status(404).send();
            } else {

                let baseCard = {
                    id: new Guid.create().value,
                    title: "new card",
                    front: "edit me",
                    back: "edit me"
                };

                if (!foundObj.cards) {
                    console.log('no cards found')
                    foundObj.cards = baseCard

                    foundObj.save(function (err) {
                        if (err) {
                            console.log(err)
                        }
                    });
                } else if (foundObj.cards.length == 0) {
                    foundObj.cards = baseCard
                    foundObj.save(function (err) {
                        if (err) {
                            console.log(err)
                        }
                    });
                }
                res.send(foundObj)
                res.end()

            }
        }
    });

});

router.post('/delete', function (req, res) {
    var id = req.query.id;
    console.log(req)
    console.log(`Deck to be deleted: ${id}`)
    Flashcard.findOneAndRemove({ _id: id }, function (err, foundObj) {
        if (err) {
            console.log(err)
            res.status(500).send();
        }
        console.log(`Item ${id} has been deleted.`)
        return res.status(200).send();
    });

});

router.post('/update/:id', function (req, res) {
    var id = req.params.id;
    console.log(id)
    Flashcard.findOne({ _id: id }, function (err, foundObj) {
        if (err) {
            console.log(err)
            res.status(500).send();
        } else {
            if (!foundObj) {
                res.status(404).send();
            } else {
                if (req.body.title) {
                    foundObj.title = req.body.title;
                }

                foundObj.save(function (err, updateObj) {
                    if (err) {
                        console.log(err)
                        res.status(500).send();
                    } else {
                        console.log(updateObj);
                    };
                });
                res.end("yes")
            }
        }
    });

});

router.post('/add', function (req, res) {
  var title = req.body.title;
   var id = req.body._id;

   console.log(id)
   new Flashcard({
       title: title,
       "_id": id,
       cards: [
           {
               id: new Guid.create().value,
               title: "new card",
               front: "edit me",
               back: "edit me"
           }
       ]
   }).save(function (err, doc) {
       if (!err) {
           console.log(`The new deck ${title} has been added to the database`);
       } else {
           res.send(err)
       }
   })
   res.end("yes")
});

module.exports = router;
