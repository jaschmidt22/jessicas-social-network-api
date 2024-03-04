//import modules and controllers
const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

//route for getting all users and creating a new user
router.route("/").get(getAllUsers).post(createUser);

//route for getting, updating, and deleting a specific user by their ID
router
  .route("/:userId")
  .get(getUserById)
  .put(updateUserById)
  .delete(deleteUserById);

//route for adding and removing a friend for specific user
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

//export router
module.exports = router;
