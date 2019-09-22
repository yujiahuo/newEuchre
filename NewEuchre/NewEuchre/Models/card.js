var DECKSIZE = 24;
function getShuffledDeck() {
    var deck = [];
    var jacks = [];
    for (var i = 0; i < DECKSIZE; i++) {
        var j = rng.nextInRange(0, i);
        if (j !== i) {
            deck[i] = deck[j];
        }
        deck[j] = new Card(SORTEDDECK[i]);
        if (deck[j].rank === Rank.Jack) {
            jacks[deck[j].suit] = deck[j];
        }
    }
    return {
        deck: deck,
        jacks: jacks,
    };
}
var Suit;
(function (Suit) {
    Suit[Suit["Clubs"] = 1] = "Clubs";
    Suit[Suit["Diamonds"] = 2] = "Diamonds";
    Suit[Suit["Hearts"] = 3] = "Hearts";
    Suit[Suit["Spades"] = 4] = "Spades";
})(Suit || (Suit = {}));
var suitsArray = [Suit.Clubs, Suit.Diamonds, Suit.Hearts, Suit.Spades];
var Rank;
(function (Rank) {
    Rank[Rank["Nine"] = 9] = "Nine";
    Rank[Rank["Ten"] = 10] = "Ten";
    Rank[Rank["Jack"] = 11] = "Jack";
    Rank[Rank["Queen"] = 12] = "Queen";
    Rank[Rank["King"] = 13] = "King";
    Rank[Rank["Ace"] = 14] = "Ace";
    Rank[Rank["Left"] = 15] = "Left";
    Rank[Rank["Right"] = 16] = "Right";
})(Rank || (Rank = {}));
var Deck = (function () {
    function Deck() {
        this.sortedDeck = this.__getSortedDeck();
        this.__cards = this.__getShuffledDeck();
    }
    Deck.prototype.popCards = function (howMany) {
        return this.__cards.splice(-howMany, this.__cards.length);
    };
    Deck.prototype.__getSortedDeck = function () {
        var deck = [];
        var ranks = [Rank.Nine, Rank.Ten, Rank.Jack, Rank.Queen, Rank.King, Rank.Ace];
        for (var _i = 0, suitsArray_1 = suitsArray; _i < suitsArray_1.length; _i++) {
            var suit = suitsArray_1[_i];
            for (var _a = 0, ranks_1 = ranks; _a < ranks_1.length; _a++) {
                var rank = ranks_1[_a];
                deck.push(new Card(suit, rank));
            }
        }
        return deck;
    };
    Deck.prototype.__getShuffledDeck = function () {
        var deck = [];
        for (var i = 0; i < DECKSIZE; i++) {
            var j = rng.nextInRange(0, i);
            if (j !== i) {
                deck[i] = deck[j];
            }
            deck[j] = new Card(this.sortedDeck[i]);
        }
        return deck;
    };
    return Deck;
}());
var Card = (function () {
    function Card(suitOrCard, rank) {
        if (typeof suitOrCard === "number") {
            this.__suit = suitOrCard;
            this.__rank = rank;
        }
        else {
            var card = suitOrCard;
            this.__suit = card.suit;
            this.__rank = card.rank;
        }
        this.__id = Suit[this.__suit] + this.__rank;
    }
    Object.defineProperty(Card.prototype, "suit", {
        get: function () {
            return this.__suit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "rank", {
        get: function () {
            return this.__rank;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "functionalSuit", {
        get: function () {
            if (this.__functionalSuit)
                return this.__functionalSuit;
            else
                return this.__suit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "functionalRank", {
        get: function () {
            if (this.__functionalRank)
                return this.__functionalRank;
            else
                return this.__rank;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "id", {
        get: function () {
            return this.__id;
        },
        enumerable: true,
        configurable: true
    });
    Card.safeCard = function (card) {
        if (card) {
            return new Card(card);
        }
        return null;
    };
    return Card;
}());
//# sourceMappingURL=card.js.map