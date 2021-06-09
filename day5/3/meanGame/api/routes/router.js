const express = require("express");
const router = express.Router();
const controllerGame = require("../controllers/games.controller");
const controllerPublishers = require("../controllers/publishers.controller");
const controllerReviews = require("../controllers/reviews.controller");

router.route("/games")
      .get(controllerGame.gamesGetAll)
      .post(controllerGame.gamesAddOne)
      
router.route("/games/some")
      .get(controllerGame.gamesGetSome)

router.route("/game/:gameId")
      .get(controllerGame.gamesGetOne)
      .put(controllerGame.gamesUpdateOne)
      .delete(controllerGame.gamesDeleteOne);

router.route("/games/:gameId/publishers")
      .get(controllerPublishers.publishersGetAll)
      .post(controllerPublishers.publisherAddOne)
      .put(controllerPublishers.publisherUpdate)
      .delete(controllerPublishers.publisherDelete);

router.route("/games/:gameId/reviews")
      .get(controllerReviews.reviewsGetAll)
      .post(controllerReviews.reviewsAddOne)
      .put(controllerReviews.reviewsUpdate)
      .delete(controllerReviews.reviewsDelete);

module.exports = router;