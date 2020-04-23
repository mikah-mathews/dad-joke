export class ReactionGif {
  async getRandomGif() {
    console.log("Inside gif method");
    try {
      let gifResponse = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=ugh&limit=100&offset=0&rating=PG-13&lang=en`);
      console.log("I got past gifResponse fetch");
      let jsonifiedGifResponse;
      if (gifResponse.ok && gifResponse.status === 200) {
        jsonifiedGifResponse = await gifResponse.json();
        let { data } = jsonifiedGifResponse;
        let randomGif = data[Math.floor(Math.random()*99)];
        console.log(jsonifiedGifResponse);
        let { images:{ original: { url }} } = randomGif;
        jsonifiedGifResponse = url;
      } else {
        jsonifiedGifResponse = false; 
      }
      return jsonifiedGifResponse;
    } catch (error) {
      console.log("in gif error");
      return false;
    }
  }
}