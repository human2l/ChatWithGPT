const { DUMMY_DATA } = require("@/constances");

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const getCompletion = async (dialogue) => {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: dialogue, //[{role: "user", content: "Hello world"}]
  });
  return completion;
};

// console.log(completion.data.choices[0].message);
export default getCompletion;
