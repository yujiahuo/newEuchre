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
        this.__nsGamesWon = 0;
        this.__ewGamesWon = 0;
        this.__nsTotalScore = 0;
        this.__ewTotalScore = 0;
        this.__setDefaultSettings();
    }
    SessionState.prototype.nsGamesWon = function () {
        return this.__nsGamesWon;
    };
    SessionState.prototype.ewGamesWon = function () {
        return this.__ewGamesWon;
    };
    SessionState.prototype.nsTotalScore = function () {
        return this.__nsTotalScore;
    };
    SessionState.prototype.ewTotalScore = function () {
        return this.__ewTotalScore;
    };
    SessionState.prototype.settings = function () {
        return this.__settings;
    };
    SessionState.prototype.players = function () {
        return this.__players;
    };
    SessionState.prototype.__setDefaultSettings = function () {
        this.__settings.sound = true;
        this.__settings.openHands = false;
        this.__settings.enableNoTrump = false;
        this.__settings.showTrickHistory = false;
        this.__settings.statMode = false;
        this.__settings.messageLevel = MessageLevel.Game;
        this.__settings.numGamesToPlay = 1;
        this.__players = [
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
        this.__nsScore = 0; //north south
        this.__ewScore = 0; //east west
        //Hand stuff
        this.__deck = new Deck();
        this.__trickNumber = 1;
        this.__nsTricksWon = 0;
        this.__ewTricksWon = 0;
        this.__playedCards = []; //array of cards that have been played this trick so far
        this.__players = players;
    }
    SingleGameState.prototype.nsScore = function () {
        return this.__nsScore;
    };
    SingleGameState.prototype.ewScore = function () {
        return this.__ewScore;
    };
    SingleGameState.prototype.gameStage = function () {
        return this.__gameStage;
    };
    SingleGameState.prototype.trumpCandidate = function () {
        return this.__trumpCandidate;
    };
    SingleGameState.prototype.bidResult = function () {
        return this.__bidResult;
    };
    SingleGameState.prototype.dealer = function () {
        return this.__dealer;
    };
    SingleGameState.prototype.trickNumber = function () {
        return this.__trickNumber;
    };
    SingleGameState.prototype.nsTricksWon = function () {
        return this.__nsTricksWon;
    };
    SingleGameState.prototype.ewTricksWon = function () {
        return this.__ewTricksWon;
    };
    SingleGameState.prototype.suitLead = function () {
        return this.__suitLead;
    };
    SingleGameState.prototype.playedCards = function () {
        return this.__playedCards;
    };
    SingleGameState.prototype.currentPlayer = function () {
        return this.__currentPlayer;
    };
    return SingleGameState;
}());
//# sourceMappingURL=gameState.js.map