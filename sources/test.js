fetch('https://thehackernews.com/search/label/Cyber%20Attack')
.then((resp) => resp.json())
.then((data) => console.log(data));