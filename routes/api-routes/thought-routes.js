//import modules and controllers
const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtsById,
  createThought,
  updateThoughtById,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

//route for getting all thoughts and creating new thought
router.route("/").get(getAllThoughts).post(createThought);

//route for getting, updating, and deleting a specific thought by its ID
router
  .route("/:thoughtId")
  .get(getThoughtsById)
  .put(updateThoughtById)
  .delete(deleteThought);

//route for creating a reaction for a specific thought
router.route("/:thoughtId/reactions").post(createReaction);

//route for deleting a reaction for a specific thought
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

//export router
module.exports = router;
