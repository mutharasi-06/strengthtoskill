require("dotenv").config({ path: "../.env" });

async function listModels() {
  const apiKey = process.env.GEMINI_API_KEY;
  const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
  
  try {
    const fetch = (await import("node-fetch")).default; // or native fetch in Node 18+
    // the backend uses Node 18+ because server.js doesn't have issues with other things? Actually Node 18+ has native fetch.
  } catch(e) {}
  
  try {
    const res = await fetch(url);
    const data = await res.json();
    const fs = require('fs');
    fs.writeFileSync('models.json', JSON.stringify(data, null, 2));
    console.log("Models written to models.json");
  } catch(err) {
    console.error("Error fetching models:", err);
  }
}
listModels();
