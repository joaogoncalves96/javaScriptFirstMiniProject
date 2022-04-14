import prompts from "prompts";
import ansiEscapes from "ansi-escapes";
import { getAllNews, getPromisses } from "../Sources/hacker-News.js";
import { link } from "fs";




const { stories } = await prompts({
  type: "number",
  name: "stories",
  message: "How many stories do you want to see?",
  validate: (value) => value > 0,
});

const { fetchMode } = await prompts({
  type: "select",
  name: "fetchMode",
  message: "Please select the fetch mode:",
  choices: [
    { title: "Buffered", value: "buffered" },
    { title: "Iterator", value: "iterator" },
  ],
});

switch (fetchMode) {
  case "buffered":
    getBufferedNews();
    break;
  case "iterator":
    getIteratorNews();
    break;
}

function getBufferedNews() {
  getAllNews(stories).then((news) => {
    console.log(news);
  });
}

async function getIteratorNews() {
  const iter = getPromisses(stories);

  for await (const value of iter) {
    console.log(value);
  }

  
}
