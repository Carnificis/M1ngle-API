const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtControllers");


router.route("/").get(getThoughts).post(createThought);


router.route("/:thoughtId")
  .get(getSingleThought)
  .delete(deleteThought)
  .put(updateThought);


router.route("/:thoughtId/reactions")
    .post(addReaction);


router.route("/:thoughtId/reactions/:reactionId")
    .delete(removeReaction);

module.exports = router;
