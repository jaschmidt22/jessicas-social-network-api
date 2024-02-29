// **`/api/thoughts`**
const { Thought, User, Reaction } = require("../models");
const { Types } = require("mongoose");

// - `GET` to get all thoughts
const ThoughtController = {
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find({});
      res.json(thoughts);
    } catch (err) {
      res.star = tus(400).json(err);
    }
  },

  // - `GET` to get a single thought by its `_id`
  async getThoughtsById(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });
      if (!thought) {
        res.status(404).json({ message: "Thought not found" });
      } else {
        res.json(thought);
      }
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // - `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)                        ???
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.status(200).json(thought);
    } catch (err) {
      res.status(400), json(err);
    }
  },

  // - `PUT` to update a thought by its `_id`
  async updateThoughtById(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        req.body,
        {
          new: true,
        }
      );
      if (!thought) {
        res.status(404).json({ message: "Thought not found" });
      } else {
        res.json(thought);
      }
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // - `DELETE` to remove a thought by its `_id`
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findByIdAndDelete({
        _id: req.params.thoughtId,
      });
      res.status(200).json(thought);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // - `POST` to create a reaction stored in a single thought's `reactions` array field
  async createReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );
      thought ? res.json(thought) : res.status(404).json({ message: notFound });
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // - `DELETE` to pull and remove a reaction by the reaction's `reactionId` value
  async deleteReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      thought ? res.json(thought) : res.status(404).json({ message: notFound });
    } catch (err) {
      res.status(400).json(err);
    }
  },
};

module.exports = ThoughtController;

// ```json
// // example data
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }
// ```

// ---

// **`/api/thoughts/:thoughtId/reactions`**
