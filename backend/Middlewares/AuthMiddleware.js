const jwt = require("jsonwebtoken");
const { User } = require("../models/UserModel");

const userVerification = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ status: false, message: "Unauthorized: No token" });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ status: false, message: "Unauthorized: User not found" });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(403).json({ status: false, message: "Invalid token" });
  }
};

module.exports = { userVerification };
