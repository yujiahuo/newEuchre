var controller = new Controller();
controller.startSession();
controller.startGame();
function playNextStep() {
    controller.playNextStep();
}
var Controller = (function () {
    function Controller() {
    }
    Controller.prototype.startSession = function () {
        this.__session = new SessionState();
    };
    Controller.prototype.startGame = function () {
        if (!this.__session)
            return;
        this.__currentGame = new SingleGameState(this.__session.players());
        this.__continue = true;
        this.__dealHands();
        for (var _i = 0, _a = this.__session.players(); _i < _a.length; _i++) {
            var player = _a[_i];
            player.init();
        }
    };
    Controller.prototype.playNextStep = function () {
        if (this.__currentGame.gameStage() === GameStage.BidRoundOne ||
            this.__currentGame.gameStage() === GameStage.BidRoundTwo) {
            this.__getBid();
        }
    };
    Controller.prototype.__dealHands = function () {
        for (var i = 0; i < 20; i++) {
            var player = (dealer + i) % 4;
            var cardPos = Math.floor(i / 4);
            //TODO: see if skipping the pop makes things faster
            playerHands[player][cardPos] = deck.pop();
        }
    };
    Controller.prototype.__getBid = function () {
        var bidRound = this.__currentGame.gameStage();
        var player = this.__currentGame.currentPlayer();
        //player.chooseOrderUp();
    };
    Controller.prototype.__discardCard = function () {
    };
    Controller.prototype.__playCard = function () {
    };
    return Controller;
}());
//# sourceMappingURL=gameController.js.map