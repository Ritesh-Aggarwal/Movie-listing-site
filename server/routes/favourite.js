const express = require("express");
const router = express.Router();
const { Favourite } = require("../models/Favourite");

const { auth } = require("../middleware/auth");

//Favourite API

router.post("/favourited", (req, res) => {
  Favourite.find({
    userFrom: req.body.userFrom,
    movieId: req.body.movieId,
  }).exec((err, info) => {
    if (err) return res.status(400).send(err);

    let result = false;
    if (info.length !== 0) {
      result = true;
    }

    res.status(200).json({ success: true, favourited: result });
  });
});

router.post("/removeFromFavorite", (req, res) => {
  Favourite.findOneAndDelete({
    movieId: req.body.movieId,
    userFrom: req.body.userFrom,
  }).exec((err, doc) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, doc });
  });
});

router.post("/addToFavorite", (req, res) => {
  const favourite = new Favourite(req.body);

  favourite.save((err, doc) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true });
  });
});

router.post("/getFavouriteMovies", (req, res) => {
  Favourite.find({ userFrom: req.body.userFrom }).exec((err, favourites) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true, favourites: favourites });
  });
});

module.exports = router;
