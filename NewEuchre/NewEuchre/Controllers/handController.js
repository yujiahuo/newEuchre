var HandController = /** @class */ (function () {
    function HandController() {
    }
    // Create new deck
    // Set dealer
    // Deal hands
    HandController.setupNewHand = function (gameState, dealStyle) {
        console.log("New hand");
        gameState.gameStage = GameStage.Deal;
        gameState.deck = new Deck();
        //TODO: factor out
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
    };
    return HandController;
}());
//# sourceMappingURL=handController.js.map