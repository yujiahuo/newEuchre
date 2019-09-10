/******************************************************
/* Bids if it has 3+ of the suit (including left, but not including pickup if first round dealer)
/* Will play the the lowest card that can beat all cards played so far
/* If last player and partner is winning, sluff
/*******************************************************/
var DecentAI = (function () {
    function DecentAI() {
    }
    //tslint:disable-next-line:no-empty
    DecentAI.prototype.init = function (_me) { };
    DecentAI.prototype.chooseOrderUp = function (hand, trumpCandidate, _dealer) {
        this.hand = hand;
        this.handStrength = this.calculateHandStrength(trumpCandidate.suit);
        if (this.handStrength > 2) {
            return true;
        }
        return false;
    };
    DecentAI.prototype.pickDiscard = function (hand, trump) {
        return getWorstCardInHand(this.hand, undefined, trump);
    };
    DecentAI.prototype.pickTrump = function (_hand, trumpCandidate) {
        if (!trumpCandidate) {
            return null;
        }
        var trumpCandidateSuit = trumpCandidate.suit;
        if (trumpCandidateSuit !== Suit.Clubs) {
            this.handStrength = this.calculateHandStrength(Suit.Clubs);
            if (this.handStrength > 2) {
                return Suit.Clubs;
            }
        }
        if (trumpCandidateSuit !== Suit.Diamonds) {
            this.handStrength = this.calculateHandStrength(Suit.Diamonds);
            if (this.handStrength > 2) {
                return Suit.Diamonds;
            }
        }
        if (trumpCandidateSuit !== Suit.Spades) {
            this.handStrength = this.calculateHandStrength(Suit.Spades);
            if (this.handStrength > 2) {
                return Suit.Spades;
            }
        }
        if (trumpCandidateSuit !== Suit.Hearts) {
            this.handStrength = this.calculateHandStrength(Suit.Hearts);
            if (this.handStrength > 2) {
                return Suit.Hearts;
            }
        }
        return null;
    };
    DecentAI.prototype.chooseGoAlone = function (_hand, _trump) {
        return this.handStrength > 4;
    };
    DecentAI.prototype.pickCard = function (hand, _maker, trump, trickSoFar) {
        var numPlayersPlayed;
        var lowestWinningCard = null;
        var lowestWinningValue = 9999;
        var winningValue = 0;
        var value;
        var i;
        this.hand = hand; //you need to do this or else
        numPlayersPlayed = trickSoFar.length;
        if (numPlayersPlayed === 0) {
            return getBestCardInHand(this.hand, undefined, trump);
        }
        var trickSuit = trickSoFar[0].card.suit;
        //Find currently winning value
        var bestPlayedCard = getBestCardPlayed(trickSoFar, trump);
        winningValue = getCardValue(bestPlayedCard.card, trump);
        //If not last player, play the lowest card that can win
        //If we can't win, then sluff
        for (i = 0; i < this.hand.length; i++) {
            if (!isValidPlay(this.hand, this.hand[i], trickSuit)) {
                continue;
            }
            value = getCardValue(this.hand[i], trickSuit, trump);
            if (value > winningValue) {
                if (value < lowestWinningValue) {
                    lowestWinningCard = this.hand[i];
                    lowestWinningValue = value;
                }
            }
        }
        if (lowestWinningCard) {
            return lowestWinningCard;
        }
        else {
            return getWorstCardInHand(this.hand, trickSuit, trump);
        }
    };
    //tslint:disable-next-line:no-empty
    DecentAI.prototype.trickEnd = function (_playedCardsCallback) { };
    //Whatever just count trump
    DecentAI.prototype.calculateHandStrength = function (trump) {
        var smartlyCalculatedValue;
        smartlyCalculatedValue = numCardsOfSuit(this.hand, trump);
        if (this.theyHaveTheLeft(trump)) {
            smartlyCalculatedValue++;
        }
        //just number of trump you're holding yay
        return smartlyCalculatedValue;
    };
    DecentAI.prototype.theyHaveTheLeft = function (trump) {
        for (var _i = 0, _a = this.hand; _i < _a.length; _i++) {
            var card = _a[_i];
            if (card.rank === Rank.Jack && card.suit === getOppositeSuit(trump)) {
                return true;
            }
        }
        return false;
    };
    return DecentAI;
}());
//# sourceMappingURL=decentAI.js.map