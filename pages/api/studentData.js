import * as fs from "fs";

export default async function handler(req, res) {
  fs.readFile("studentdata/student.json", "utf-8", (err, data) => {
    console.log("");
    res.status(200).json(JSON.parse(data));
  });

// let data = await fs.promises.readdir("studentdata")
// let myfiles;
// let allBlogs=[];
// for(let index = 0; index < data.length; index++){
//   const item = data[index];
//   console.log(item)
//   myfiles = await fs.promises.readFile(('studentdata/'+item), "utf-8")
//  allBlogs.push(JSON.parse(myfiles))
  
// }
//     res.status(200).json(allBlogs);



}
