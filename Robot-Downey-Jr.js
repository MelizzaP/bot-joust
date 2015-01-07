(function () {

  var botName = 'Robot-Downey-Jr'

  var myThreshold = 208
  var enemyThreshold = 208

  var rounds = 0

  var BotClass = function () {
    // <<Initialize bot state here>>

    return {
      name: botName,
      play: function (drawnCard, remainingDeckSize, moveType) {
        //
        // moveType will be either 'normal', 'war', 'normal-gamble', or 'war-gamble'
        //
        // Return 'accept' to play the drawn card, or 'gamble' to draw a different card.
        //
        if ((moveType === 'normal' || moveType === 'war') && drawnCard.value < 7a && remainingDeckSize > 13 && myThreshold > enemyThreshold) {
          return 'gamble'
        }
        else {
          return 'accept'
        }
      },
      handleRoundResult: function (didIWin, loot) {
        // TODO: Whatever you want. You can do aanything
        // console.log("didIWin:", didIWin)
        // console.log("loot:", loot)
        // console.log('threshold: ', threshold)
        rounds++
        console.log('round:', rounds)

        if (didIWin === true){
          for (var i in loot){
            if (loot[i].isMine === undefined){
              myThreshold += loot[i].value
              enemyThreshold -= loot[i].value
              console.log('win:', didIWin, 'my threshold: ', myThreshold, 'enemy threshold: ', enemyThreshold)
            }
          }
        }
        else {
          for (var i in loot){
            if (loot[i].isMine === true){
              myThreshold -= loot[i].value
              enemyThreshold += loot[i].value
              console.log('win:', didIWin, 'my threshold: ', myThreshold, 'enemy threshold: ', enemyThreshold)
            }
          }
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

