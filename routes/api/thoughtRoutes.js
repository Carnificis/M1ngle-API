const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/studentController");

// /api/students
router.route("/").get(getThoughts).post(createThought);

// /api/students/:studentId
router.route("/:thoughtId").get(getSingleThought).delete(deleteThought);

// /api/students/:studentId/assignments
router.route("/:thoughtId/assignments").post(addReaction);

// /api/students/:studentId/assignments/:assignmentId
router.route("/:thoughtId/reaction/:reactionId").delete(removeReaction);

module.exports = router;
