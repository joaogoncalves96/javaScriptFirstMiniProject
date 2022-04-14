import prompts from "prompts";
import ansiEscapes from "ansi-escapes";

import sources from "./project/sources/index.js";

const { stories } = await prompts ({
    type: "number",
    name: "stories",
    message: "How many stories per source?",
    validate: (value) => value > 0,
});

const { fetchMode } = await prompts ({
    type: "select",
    name: "fetchMode",
    message: "Please select the fetch mode:",
    choices: [ 
    { title: 'Buffered' },
    { title: 'Iterator' },
    { title: 'Stream' }
  

        
    ]
})