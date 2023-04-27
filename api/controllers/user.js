import { users } from "./fake.js";
import jwt from "jsonwebtoken";

export const getUser = (req, res) => {
  try {
    const user = users.find((p) => p.email === req.body.email);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.password !== req.body.password) {
      return res.status(401).json({ message: "Wrong password" });
    }

    const token = jwt.sign(
      { email: user.email, password: user.password },
      "worked"
    );
    const { password, ...other } = user;
    return res.status(200).json({ user: other, token });
  } catch (error) {
    res.status(400).json(error);
  }
};
