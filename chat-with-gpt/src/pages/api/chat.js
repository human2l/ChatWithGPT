import getCompletion from "@/lib/openai";

const chat = async (req, res) => {
  if (req.method === "POST") {
    try {
      let { dialogue } = req.body;
      const completion = await getCompletion(dialogue);
      const responseMessage = completion.data.choices[0].message;
      dialogue.push(responseMessage);
      return res.send({ done: true, dialogue });
    } catch (error) {
      console.error("Something went wrong logging in through api", error);
      return res.status(500).send({ done: false });
    }
  }
  return res.send({ done: false });
};

export default chat;
