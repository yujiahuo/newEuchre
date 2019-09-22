var GameStage;
(function (GameStage) {
    GameStage[GameStage["Deal"] = 0] = "Deal";
    GameStage[GameStage["BidRoundOne"] = 1] = "BidRoundOne";
    GameStage[GameStage["BidRoundTwo"] = 2] = "BidRoundTwo";
    GameStage[GameStage["Discard"] = 3] = "Discard";
    GameStage[GameStage["Playing"] = 4] = "Playing";
})(GameStage || (GameStage = {}));
var SessionState = (function () {
    function SessionState() {
        this.__setDefaultSettings();
        this.nsGamesWon = 0;
        this.ewGamesWon = 0;
        this.nsTotalScore = 0;
        this.ewTotalScore = 0;
    }
    SessionState.prototype.__setDefaultSettings = function () {
        this.settings = {
            sound: true,
            openHands: false,
            enableNoTrump: false,
            showTrickHistory: false,
            statMode: false,
            messageLevel: MessageLevel.Step,
            numGamesToPlay: 1,
        };
        this.players = [
            new Player(Seat.South),
            new Player(Seat.West, new DecentAI()),
            new Player(Seat.North, new DecentAI()),
            new Player(Seat.East, new DecentAI()),
        ];
    };
    return SessionState;
}());
var SingleGameState = (function () {
    function SingleGameState(players) {
        this.playedCards = []; //array of cards that have been played this trick so far
        this.players = players;
        this.nsScore = 0;
        this.ewScore = 0;
        this.gameStage = GameStage.Deal;
    }
    SingleGameState.prototype.getNextPlayer = function (player) {
        return this.players[nextSeat(player.seat)];
    };
    SingleGameState.prototype.startNewHand = function () {
        this.deck = new Deck();
        if (!this.dealer) {
            this.dealer = this.players[rng.nextInRange(0, 3)];
        }
        else {
            this.dealer = this.players[nextSeat(this.dealer.seat)];
        }
        this.__dealHands();
    };
    SingleGameState.prototype.__dealHands = function () {
        var player = this.dealer;
        for (var _i = 0, _a = [3, 2, 3, 2, 2, 3, 2, 3]; _i < _a.length; _i++) {
            var numToDeal = _a[_i];
            player = this.getNextPlayer(player);
            (_b = player.hand).push.apply(_b, this.deck.popCards(numToDeal));
        }
        var _b;
    };
    return SingleGameState;
}());
//# sourceMappingURL=gameState.js.map