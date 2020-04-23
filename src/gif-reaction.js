export class ReactionGif {
  async getRandomGif() {
    console.log("Inside gif method");
    try {
      let gifResponse = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=groan&limit=50&offset=0&rating=PG-13&lang=en`);
      console.log("I got past gifResponse fetch");
      let jsonifiedGifResponse;
      if (gifResponse.ok && gifResponse.status === 200) {
        jsonifiedGifResponse = await gifResponse.json();
        
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