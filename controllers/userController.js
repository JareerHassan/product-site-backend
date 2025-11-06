import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  const admin = await User.findOne({ email, isAdmin: true });

  if (admin && (await admin.matchPassword(password))) {
    res.json({
      _id: admin._id,
      email: admin.email,
      token: generateToken(admin._id),
    });
  } else {
    res.status(401).json({ message: "Invalid admin credentials" });
  }
};
