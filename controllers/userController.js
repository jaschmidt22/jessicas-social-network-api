// **`/api/users`**
const { User } = require("../models");

const UserController = {
  // - `GET` all users
  getAllUsers(req, res) {
    User.find({})
      .then((userData) => res.json(userData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // - `GET` a single user by its `_id` and populated thought and friend data ??
  getUserById(req, res) {
    User.findById(req.params.userId)
      .then((userData) => res.json(userData))
      .catch((err) => res.status(400).json(err));
  },

  // - `POST` a new user:
  createUser(req, res) {
    User.create(req.body)
      .then((userData) => res.json(userData))
      .catch((err) => res.status(400).json(err));
  },

  // - `PUT` to update a user by its `_id`
  updateUserById(req, res) {
    User.findOneAndUpdate(req.params.id, req.body, { new: true })
      .then((userData) => {
        if (!userData) {
          return res.status(404).json({ message: "User not found" });
        }
        res.json(userData);
      })
      .catch((err) => res.status(400).json(err));
  },

  // - `DELETE` to remove user by its `_id`
  deleteUserById(req, res) {
    User.findOneAndDelete(req.params.id)
      .then((userData) => {
        if (!userData) {
          return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User successfully deleted" });
      })
      .catch((err) => res.status(400).json(err));
  },

  // - `POST` to add a new friend to a user's friend list
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.body.friendId || req.params.friendId } },
      { new: true }
    )
      .then((userData) => {
        if (!userData) {
          return res.status(404).json({ message: "User not found" });
        }
        res.json(userData);
        console.log("New friend added");
      })
      .catch((err) => res.status(400).json(err));
  },

  // - `DELETE` to remove a friend from a user's friend list
  removeFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $pull: { friends: params.friendId } },
      { new: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: "No user with this id" });
        }
        // check if friend was removed
        const removed = !dbUserData.friends.includes(params.friendId);
        // return response with appropriate message
        if (removed) {
          res.json({ message: "Friend successfully removed", dbUserData });
        } else {
          res.json(dbUserData);
        }
      })
      .catch((err) => res.status(400).json(err));
  },
};

// ```json
// // example data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }
// ```

// **BONUS**: Remove a user's associated thoughts when deleted.

// ---

// **`/api/users/:userId/friends/:friendId`**

// ---
