const getData = async () => {
    try{
    const resp = await fetch('https://thehackernews.com/search/label/Cyber%20Attack')
    const data = await resp.json()
    console.log(data)
} catch(err) {
    console.log(err)
}
}
getData()