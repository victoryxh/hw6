'use strict'

$(document).ready(() => {

  // create objects representing artworks
  const workA = {
    name: 'A Bar at the Folies-Bergère',
    price: '$28,600,600',
    smallImg: 'aBarSmall.jpg',
    largeImg: 'aBarLarge.jpg',
    toolOn: false,
  };

  const workB = {
    name: 'New York Movie',
    price: '$92,000,000',
    smallImg: 'newYorkSmall.jpg',
    largeImg: 'newYorkLarge.jpg',
    toolOn: false,
  };

  const workC = {
    name: 'Nighthawks',
    price: '$92,000,000',
    smallImg: 'nighthawksSmall.jpg',
    largeImg: 'nighthawksLarge.jpg',
    toolOn: false,
  };

  const workD = {
    name: 'La Promenade',
    price: '$81,400,000',
    smallImg: 'laPromenadeSmall.jpg',
    largeImg: 'laPromenadeLarge.jpg',
    toolOn: false,
  };

  const workE = {
    name: 'Impression, Sunrise',
    price: '$80,000,000',
    smallImg: 'impressionSmall.jpg',
    largeImg: 'impressionLarge.jpg',
    toolOn: false,
  };

  // create an array to store artworks
  const artWorks = [workA, workB, workC, workD, workE];

  for (let i = 0; i < 5; i++) {
    let $div = $('#gallery');
    $div.append(`<div class='thumbnail' id='thum${i}'><img src='${artWorks[i].smallImg}' id='${i}'></div>`);
    
  }

  $('.thumbnail').css('display', 'inline-block');
  $('.thumbnail').css('position', 'relative');
  $('.thumbnail').css('padding-right', '40px');
  $('img').css('width', '230px');

  for (let item in artWorks) {
    $('#' + item).hover(() => {
      let $div = $('#largeView');
      $div.html(`<img src='${artWorks[item].largeImg}' class='large'>`);
      $('.large').css('height', '400px');
      $('.large').css('display', 'none');
      $('.large').fadeIn();
    }, () => {
      $('.large').fadeOut();
    });
  }


  for (let item in artWorks) {
    $('#' + item).click(() => {
      let $div = $('#thum' + item);
      if (!artWorks[item].toolOn) {
        $div.append(`<span class='tooltip' id='tool${item}'>Title: ${artWorks[item].name}<br>Pirce: ${artWorks[item].price}</span>`);
        $('#tool' + item).css('width', '150px');
        $('#tool' + item).css('background-color', '#000');
        $('#tool' + item).css('color', '#fff');
        $('#tool' + item).css('text-align', 'center');
        $('#tool' + item).css('border-radius', '6px');
        $('#tool' + item).css('padding', '5px 0');
        $('#tool' + item).css('position', 'absolute');
        $('#tool' + item).css('z-index', '1');
        $('#tool' + item).css('bottom', '50%');
        $('#tool' + item).css('left', '15%');
        artWorks[item].toolOn = true;
        setTimeout(() => {
          $('#tool' + item).css('visibility', 'hidden');
          artWorks[item].toolOn = false;
        }, 5000);
      }
    })
  }
});