angular.module('portfolioApp', [])
  .controller('CardDeckController', function() {
    var cardDeck = this;
    cardDeck.cards = [
      {imgSrc:'./images/warsound.png', href:'./warsound.html', title:'WarSound'},
      {imgSrc:'./images/wave.png', href:'./wave.html', title:'Wave'},
      {imgSrc:'./images/dotenote.png', href:'./dotenote.html', title:'DoteNote'}
    ];
  });