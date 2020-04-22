export class DadJoke {
  async getRandomDadJoke() {
    try {
      let response = await fetch(`https://icanhazdadjoke.com/`);
      let jsonifiedResponse;
      if (response.ok && response.status === 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      } 
      return jsonifiedResponse;
    } catch {
      return false;
    }
  }
}