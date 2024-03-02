const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlenth: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => new Date(timestamp).toLocaleString(),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
// **Thought**:

// - `thoughtText`

//   - String
//   - Required
//   - Must be between 1 and 280 characters

// - `createdAt`

//   - Date
//   - Set default value to the current timestamp
//   - Use a getter method to format the timestamp on query

// - `username` (The user that created this thought)

//   - String
//   - Required

// - `reactions` (These are like replies)
//   - Array of nested documents created with the `reactionSchema`

// **Schema Settings**:

// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
