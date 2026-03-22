require("dotenv").config({ path: "../.env" });
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");

async function testModels() {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const modelsToTest = ["gemini-1.5-flash", "gemini-1.5-flash-latest"];
  let out = "";
  for (const m of modelsToTest) {
    try {
      const model = genAI.getGenerativeModel({ model: m });
      const result = await model.generateContent("hello");
      out += m + " WORKED! Output: " + result.response.text() + "\n";
    } catch(err) {
      out += m + " FAILED: " + err.message + "\n";
      out += m + " STACK: " + err.stack + "\n";
    }
  }
  fs.writeFileSync("out.txt", out);
}
testModels();
