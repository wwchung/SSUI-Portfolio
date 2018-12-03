angular.module('portfolioApp', [])
  .controller('CardDeckController', function($scope) {
    $scope.cards = [
      {
        imgSrc:'images/warsound/card.png',
        href:'warsound.html',
        title:'WarSound'
      },
      {
        imgSrc:'images/wave/card.png',
        href:'wave.html',
        title:'Wave'},
      {
        imgSrc:'images/dotenote/card.png',
        href:'dotenote.html',
        title:'DoteNote'}
    ];
  });