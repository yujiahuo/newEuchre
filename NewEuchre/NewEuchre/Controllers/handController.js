var HandController = (function () {
    function HandController() {
    }
    HandController.startNewHand = function (gameState) {
        gameState.deck = new Deck();
        if (!gameState.dealer) {
            gameState.dealer = gameState.players[rng.nextInRange(0, 3)];
        }
        else {
            gameState.dealer = gameState.players[nextSeat(gameState.dealer.seat)];
        }
        this.__dealHands(gameState);
    };
    HandController.__dealHands = function (gameState) {
        var player = gameState.dealer;
        for (var _i = 0, _a = [3, 2, 3, 2, 2, 3, 2, 3]; _i < _a.length; _i++) {
            var numToDeal = _a[_i];
            player = gameState.getNextPlayer(player);
            (_b = player.hand).push.apply(_b, gameState.deck.popCards(numToDeal));
        }
        var _b;
    };
    return HandController;
}());
//# sourceMappingURL=handController.js.map