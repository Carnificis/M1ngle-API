const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  addFriend,
  deleteFriend,
  deleteUser,
} = require("../../controllers/userController.js");
const { exists } = require("../../models/user.js");

router.route("/").get(getUsers).post(createUser);


router
  .route("/:userId")
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

router.route("/:userId/friends/:friendId")
  .put(addFriend)
  .delete(deleteFriend)

module.exports = router;
