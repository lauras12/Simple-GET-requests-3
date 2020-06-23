'use strict';

//function that gets the dog images from the Dog API
function getDogImg() {
  const breed = $('input[name=breed]').val();
  fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then(response => response.json())
    .then(displayImages) // responseJson => displayImages(responseJson)
    .then(console.log)
    .catch(error => {
      console.log(error);
      alert('Opps! Something went wrong, please try again later.')
    });
}

//function that displays the dog images from the choosen breed

function displayImages(responseJson) {
  $('.imgplaceholder').empty()
 $('.imgplaceholder').append(`<img src=${responseJson.message[0]}>`);

  //display results
  $('.results').removeClass('hidden');
  return responseJson;
};


function watchForm() {
  $('form').submit(event => {
    //so page doesn't reload
    event.preventDefault();
    getDogImg();
  });
}

//Function for when the app loads on the page
$(function () {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});