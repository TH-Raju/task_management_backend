let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let bcrypt = require("bcrypt");

let userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
      require: [true, "Password is required"],
    },
    role: {
      type: String,
      enum: ["user", "admin", "super_admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  let salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

let User = mongoose.model("user", userSchema);
module.exports = User;
