var HandController = /** @class */ (function () {
    function HandController() {
    }
    HandController.startNewHand = function (gameState, dealStyle) {
        console.log("Start new hand");
        gameState.deck = new Deck();
        if (!gameState.dealer) {
            gameState.dealer = gameState.players[rng.nextInRange(0, 3)];
        }
        else {
            gameState.dealer = gameState.players[nextSeat(gameState.dealer.seat)];
        }
        this.__dealHands(gameState, dealStyle);
    };
    HandController.__dealHands = function (gameState, dealStyle) {
        var _a;
        console.log("Deal hands");
        var player = gameState.dealer;
        for (var _i = 0, dealStyle_1 = dealStyle; _i < dealStyle_1.length; _i++) {
            var dealGroup = dealStyle_1[_i];
            player = gameState.getNextPlayer(player);
            (_a = player.hand).push.apply(_a, gameState.deck.popCards(dealGroup.length));
        }
        console.log(gameState.players[Seat.South].hand);
        console.log(gameState.players[Seat.West].hand);
        console.log(gameState.players[Seat.North].hand);
        console.log(gameState.players[Seat.East].hand);
        AnimationController.dealCards(gameState.players, gameState.dealer.seat, dealStyle);
    };
    return HandController;
}());
//# sourceMappingURL=handController.js.map