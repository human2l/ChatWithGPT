import { DUMMY_DATA } from "@/constances";
import { setTokenToCookie } from "@/lib/cookies";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { username, password } = req.body;
      if (DUMMY_DATA.users[username] === password) {
        console.log(`${username} has logged in`);
        const token = jwt.sign({ username }, process.env.JWT_SECRET);
        setTokenToCookie(token, res);
        return res.send({ done: true });
      }
    } catch (error) {
      console.error("Something went wrong logging in through api", error);
      return res.status(500).send({ done: false });
    }
  }
  return res.send({ done: false });
};

export default login;
