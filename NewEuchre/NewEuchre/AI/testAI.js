/******************************************************
/* Does whatever a test AI does
/*******************************************************/
var TestAI = (function () {
    function TestAI() {
    }
    //tslint:disable-next-line:no-empty
    TestAI.prototype.init = function (_me) {
    };
    TestAI.prototype.chooseOrderUp = function (_hand, _trumpCandidate, _dealer) {
        return false;
    };
    TestAI.prototype.pickDiscard = function (hand, _trump) {
        return hand[0];
    };
    TestAI.prototype.pickTrump = function (_hand, _trumpCandidate) {
        return Suit.Clubs;
    };
    TestAI.prototype.chooseGoAlone = function (_hand, _trump) {
        return false;
    };
    TestAI.prototype.pickCard = function (hand, _maker, _trump, trickSoFar) {
        if (trickSoFar.length === 0) {
            return hand[0];
        }
        var trickSuit = trickSoFar[0].card.suit;
        for (var _i = 0, hand_1 = hand; _i < hand_1.length; _i++) {
            var card = hand_1[_i];
            if (isValidPlay(hand, card, trickSuit)) {
                return card;
            }
        }
        //we will never reach this but just in case
        return hand[0];
    };
    //tslint:disable-next-line:no-empty
    TestAI.prototype.trickEnd = function (_playedCardsCallback) { };
    return TestAI;
}());
//# sourceMappingURL=testAI.js.map