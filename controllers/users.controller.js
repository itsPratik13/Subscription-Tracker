import User from "../models/user.models.js";

export const getUsers = async (req, res, next) => {
  try {
    const user = await User.find().select("-password");

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "No user",
      });
    }
    const userObj = user.toObject();

    res.status(200).json({
      success: true,
      data: userObj,
    });
  } catch (error) {
    next(error);
  }
};
