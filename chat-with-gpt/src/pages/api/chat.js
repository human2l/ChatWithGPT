import getCompletion from "@/lib/openai";
import { saveLog, verifyToken } from "@/lib/utils";

const getCompletionFake = () => {
  return delay(5000).then(() => {
    return {
      role: "assistant",
      content:
        "\n\n如果不吃饭，你可能会在短时间内减轻体重，但这是不健康的方法。不吃饭不仅会导致身体出现营养不足的情况，还会导致身体代谢减缓，让你更难瘦下去。适当的饮食控制和运动才是瘦下来的可靠方法。",
    };
  });
};

function delay(t, v) {
  return new Promise((resolve) => setTimeout(resolve, t, v));
}

const chat = async (req, res) => {
  if (req.method === "POST") {
    try {
      const token = req.cookies.token;
      const user = await verifyToken(token);
      const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
      const messages = req.body;
      const completion = await getCompletion(messages);
      console.log(
        `${user} receiving ${JSON.stringify(
          completion.data.choices[0].message
        )}`
      );
      const responseMessage = completion.data.choices[0].message;
      //   const responseMessage = await getCompletionFake();
      saveLog(user, ip, messages);
      return res.send(responseMessage);
    } catch (error) {
      console.error("Something went wrong with GPT api", error);
      return res.status(500).send();
    }
  }
  return res.status(500).send();
};

export default chat;
