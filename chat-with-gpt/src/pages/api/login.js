import { DUMMY_DATA } from "@/constances";

const login = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { username, password } = req.body;
      if (DUMMY_DATA.users[username] === password) {
        console.log(`${username} has logged in`);
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
