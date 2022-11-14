import * as fs from "fs";

export default async function handler(req, res) {
  fs.readFile("studentdata/testResult.json", "utf-8", (err, data) => {
    console.log("");
    res.status(200).json(JSON.parse(data));
  });
}
