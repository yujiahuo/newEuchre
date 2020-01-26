var BidController = /** @class */ (function () {
    function BidController() {
    }
    BidController.setupBidRoundOne = function (gameState) {
        gameState.gameStage = GameStage.BidRoundOne;
        gameState.trumpCandidate = gameState.deck.popCards(1)[0];
        console.log("Trump candidate: " + gameState.trumpCandidate.id);
    };
    BidController.getNextBidRoundOne = function (gameState) {
    };
    BidController.getNextBidRoundTwo = function (gameState) {
    };
    return BidController;
}());
//# sourceMappingURL=bidController.js.map