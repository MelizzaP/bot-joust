(function () {

  var botName = 'patriotic-bot'

  var BotClass = function () {
    // <<Initialize bot state here>>
    var myDeck = [2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14];
    var enemyDeck = 208;
    return {
      name: botName,
      play: function (drawnCard, remainingDeckSize, moveType) {
        //
        // moveType will be either 'normal', 'war', 'normal-gamble', or 'war-gamble'
        //
        // Return 'accept' to play the drawn card, or 'gamble' to draw a different card.
        //
        console.log(drawnCard)
        return 'accept'
      },
      handleRoundResult: function (didIWin, loot) {
        // TODO: Whatever you want. You can do aanything
        console.log(loot)
       if(didIWin){
        for(var i = 0; i < loot.length; i++){
          
          enemyDeck.
        }
        console.log(myDeck)
       }
       else{
         console.log('lost')
       }
      }
    }
  }

  BotClass.botName = botName

  var isNodeJs = typeof module != "undefined" && module !== null && module.exports
  if (isNodeJs) {
    module.exports = BotClass
  }
  else {
    BotRegistry.register(botName, BotClass)
  }
})()