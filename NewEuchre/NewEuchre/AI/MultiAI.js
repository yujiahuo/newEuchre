var MultiAI = (function () {
    function MultiAI(biddingAI, playingAI) {
        this.biddingAI = biddingAI;
        this.playingAI = playingAI;
    }
    MultiAI.prototype.init = function (me) {
        this.biddingAI.init(me);
        this.playingAI.init(me);
    };
    MultiAI.prototype.chooseOrderUp = function (hand, trumpCandidate, dealer) {
        return this.biddingAI.chooseOrderUp(hand, trumpCandidate, dealer);
    };
    MultiAI.prototype.pickDiscard = function (hand, trump) {
        return this.biddingAI.pickDiscard(hand, trump);
    };
    MultiAI.prototype.pickTrump = function (hand, trumpCandidate) {
        return this.biddingAI.pickTrump(hand, trumpCandidate);
    };
    MultiAI.prototype.chooseGoAlone = function (hand, trump) {
        return this.biddingAI.chooseGoAlone(hand, trump);
    };
    MultiAI.prototype.pickCard = function (hand, maker, trump, trickSoFar) {
        return this.playingAI.pickCard(hand, maker, trump, trickSoFar);
    };
    MultiAI.prototype.trickEnd = function (playedCardsCallback) {
        this.playingAI.trickEnd(playedCardsCallback);
    };
    return MultiAI;
}());
//# sourceMappingURL=MultiAI.js.map