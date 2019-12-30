var HandController = (function () {
    function HandController() {
    }
    HandController.startNewHand = function () {
        this.deck = new Deck();
        if (!this.dealer) {
            this.dealer = this.players[rng.nextInRange(0, 3)];
        }
        else {
            this.dealer = this.players[nextSeat(this.dealer.seat)];
        }
        this.__dealHands();
    };
    HandController.__dealHands = function () {
        var player = this.dealer;
        for (var _i = 0, _a = [3, 2, 3, 2, 2, 3, 2, 3]; _i < _a.length; _i++) {
            var numToDeal = _a[_i];
            player = this.getNextPlayer(player);
            (_b = player.hand).push.apply(_b, this.deck.popCards(numToDeal));
        }
        var _b;
    };
    return HandController;
}());
//# sourceMappingURL=handController.js.map