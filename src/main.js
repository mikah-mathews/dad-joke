import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { DadJoke } from './../src/dad-joke.js';

$(document).ready(function () {
  $('#makeJoke').click(function () {
    // const joke = $('#joke').val();
    // $('#joke').val("");

    (async () => {
      let dadJoke = new DadJoke();
      const response = await dadJoke.getRandomDadJoke();
      console.log(response);
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $('.showJoke').text(`${response.joke}`);
      } else {
        $('.showJoke').text("Sorry, we could not get your joke. You probably wouldn't get it anyway.");
      }
    }
  });
});