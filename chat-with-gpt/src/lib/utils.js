import fs from "fs";
import jwt from "jsonwebtoken";
export const verifyToken = async (token) => {
  if (!token) return null;
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  const user = decodedToken.username;
  return user;
};

export const saveLog = (username, ip, messages) => {
  const [formattedDate, formattedTime] = getDate();
  const filePath = `./.log/${formattedDate}/${username}-${ip}/${formattedTime}.json`;
  const fileData = JSON.stringify(messages);
  const handleErr = (err) => {
    if (err) {
      console.error(err);
    }
  };
  if (!fs.existsSync(filePath)) {
    // Create the directory and the file
    const dirPath = filePath.split("/").slice(0, -1).join("/");
    fs.mkdirSync(dirPath, { recursive: true });
    fs.writeFileSync(filePath, fileData, handleErr);
  } else {
    // Append to the existing file
    fs.appendFileSync(filePath, ",", handleErr);
    fs.appendFileSync(filePath, fileData, handleErr);
  }
};

const getDate = () => {
  let today = new Date();

  let date = today.getDate().toString().padStart(2, "0");
  let month = (today.getMonth() + 1).toString().padStart(2, "0");
  let year = today.getFullYear().toString().slice(-2);

  let hours = today.getHours().toString().padStart(2, "0");
  let minutes = today.getMinutes().toString().padStart(2, "0");
  let seconds = today.getSeconds().toString().padStart(2, "0");

  let formattedDate = `${date}-${month}-${year}`;
  let formattedTime = `${hours}:${minutes}:${seconds}`;
  return [formattedDate, formattedTime];
};
