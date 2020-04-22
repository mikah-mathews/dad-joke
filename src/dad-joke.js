export class DadJoke {
  async getRandomDadJoke() {
    console.log('i am in the method')
    try {
      let response = await fetch(`https://icanhazdadjoke.com/`, {
      headers: {
        'Accept': 'application/json'
      } 
      });
      console.log('i got past the await');
      let jsonifiedResponse;
      if (response.ok && response.status === 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      } 
      return jsonifiedResponse;
    } catch (error) {
      console.log('in the catch');
      return false;
    }
  }
}