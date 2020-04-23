import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { DadJoke } from './../src/dad-joke.js';
import { ReactionGif } from './../src/gif-reaction.js';

$(document).ready(function () {
  $('#makeJoke').click(function () {
    // const joke = $('#joke').val();
    // $('#joke').val("");

    (async () => {
      let dadJoke = new DadJoke();
      let reactionGif = new ReactionGif();
      const response = await dadJoke.getRandomDadJoke();
      const gifResponse = await reactionGif.getRandomGif();
      console.log(response);
      console.log(gifResponse);
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $('.showJoke').text(`${response.joke}`);
      } else {
        $('.showJoke').text("Sorry, we could not get your joke. You probably wouldn't get it anyway.");
      }
    }

    function getGifElements(gifResponse) {
      if (gifResponse) {
        $('.showGif').html(`<img src="${gifResponse.data[0].embed_url}" alt="random image of someone groaning>`)
      } else {
        $('showGif').text("Sorry, we could not get a gif.");
      }
    }
  });
});