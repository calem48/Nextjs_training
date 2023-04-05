import { getAllUsers } from "@/controllers/userController";
import { connectDatabase } from "@/db/connect";

export default async function handler(req, res) {
  await connectDatabase();
  if (req.method === "GET") {
    getAllUsers(req, res);
  }
}
