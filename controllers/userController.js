import User from "@/models/userModel";

const getAllUsers = async (req, res) => {
  const user = await User.find({ role: "user" }).select("-password");
  res.status(200).json({ user });
};

const getSingleUsers = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id }).select("-password");

  if (!user) {
    throw new Error("user not found");
  }

  res.status(200).json({ user });
};

export { getAllUsers, getSingleUsers };
